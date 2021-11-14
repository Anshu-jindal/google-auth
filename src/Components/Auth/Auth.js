import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { notLoggedIn, loggedIn } from "../reducer";
import "./Auth.css";

function Auth() {
  const dispatch = useDispatch();

  return (
    <div className="Auth">
      <div className="login-heading">
        <h1>Welcome</h1>
        <h1>To</h1>
        <h1>Name Search</h1>
      </div>

      <div className="login-box">
        <img
          src="https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg"
          alt=""
        />
        <h2>Login Using Google</h2>
        <GoogleLogin
          clientId="52320761976-lc86008sf4o5uckemcvsjsmn8s8044tj.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={() => dispatch(loggedIn())}
          onFailure={() => dispatch(notLoggedIn())}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}

export default Auth;
