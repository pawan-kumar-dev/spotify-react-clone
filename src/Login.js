import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
const Login = () => {
  return (
    <div className="login">
      <img
        src="https://i.pinimg.com/originals/27/6f/27/276f273d11f8b9dbc0a9c55bb38ea8c6.gif"
        alt="logo"
      />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
};

export default Login;
