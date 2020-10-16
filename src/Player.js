import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        {/* sidebar */}
        <Sidebar />
        {/* body */}
        <Body />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Player;
