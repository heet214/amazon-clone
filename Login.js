import "./Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault(); //no refreshing in react

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    //Firebase login
  };

  const register = (e) => {
    e.preventDefault();

    //Firebase Register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a new email
        console.log(auth);

        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG7.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login__Signin" onClick={signin}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice. Keep me noticed
        </p>
        <button onClick={register} className="login__CreateAccount">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
