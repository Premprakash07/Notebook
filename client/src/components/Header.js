import React, { useState } from "react";
import "../css/header.css";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Sidenav from "./modals/Sidenav";
import Profile from "./modals/Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [showSidenav, toggleSidenav] = useState(false);
  const [profile, setprofile] = useState(false);
  const user = useSelector((store) => store.user);

  return (
    <div id="header" className="section">
      {user && <Sidenav toggle={showSidenav} closeNav={toggleSidenav} />}
      {user && (
        <div className="ham" onClick={() => toggleSidenav(true)}>
          <MenuIcon style={{ fontColor: "inherit", fontSize: "inherit" }} />
        </div>
      )}
      <div className="header-container">
        <Link to="/">
          <div className="logo">Notebook</div>
        </Link>
        {user && (
          <div className="nav">
            <div className="log-in-info nav-item">
              <span className="name log-in-info-item">{user.author}</span>
              <div className="profile-img log-in-info-item">
                {profile && <Profile />}
                <div
                  className="acc-icon"
                  onClick={() => setprofile((prev) => !prev)}
                >
                  P
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
