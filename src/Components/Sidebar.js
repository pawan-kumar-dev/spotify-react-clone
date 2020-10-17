import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer/DataLayer";
const Sidebar = () => {
  const [{ playlists }] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        src="https://berndvoss.com/wp-content/uploads/2018/10/spotify-transp-white-1.png"
        alt="logo"
        className="sidebar__logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br></br>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr></hr>
      {playlists?.items?.map((playlist, index) => {
        return <SidebarOption title={playlist.name} key={index} />;
      })}
    </div>
  );
};

export default Sidebar;
