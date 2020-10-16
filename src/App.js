import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi(); //connect to spotify web api
function App() {
  const [token, setToken] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : ""
  );
  useEffect(() => {
    if (!token) {
      const hash = getTokenFromUrl();

      window.location.hash = "";
      const _token = hash.access_token;
      if (_token) {
        setToken(_token);
        localStorage.setItem("token", JSON.stringify(_token));
        spotify.setAccessToken(_token);
        spotify.getMe().then(user => console.log(user));
      }
    } else {
      spotify.setAccessToken(token);
      spotify.getMe().then(user => console.log(user));
    }
  }, [token]);
  return (
    <div className="app">{token ? <h1>Im a logged in</h1> : <Login />}</div>
  );
}

export default App;
