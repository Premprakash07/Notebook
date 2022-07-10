import React, { useEffect, useState } from "react";
import "../css/settings.css";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import ProfileSettings from "./ProfileSettings";
import { useHistory } from "react-router";
import { logOut } from "../api/user";
import Pwdsettings from "./Pwdsettings";
import Logout from "./modals/Logout";

function Settings() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [settingtype, settype] = useState(true);
  const [logout, setlogout] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.title = "Notebook | Settings";
  });

  return (
    <div id="profile">
      <div className="profile-container">
        <div className="sidebar">
          <li
            className={settingtype ? "sidebar-links active" : "sidebar-links"}
            onClick={() => settype(true)}
          >
            Profile
          </li>
          <li
            className={settingtype ? "sidebar-links" : "sidebar-links active"}
            onClick={() => settype(false)}
          >
            Password
          </li>
          <li className="sidebar-links" onClick={() => setlogout(true)}>
            <FiLogOut className="logout-icon" />
            <span>Log out</span>
          </li>
        </div>
        <div className="main-content">
          <div className="head">
            <div className="profile-photo"></div>
            <div className="email">{user.email}</div>
            <div className="name">{user.author}</div>
          </div>
          <div className="content">
            {settingtype ? <ProfileSettings /> : <Pwdsettings />}
          </div>
        </div>
      </div>
      {logout && (
        <Logout
        close={() => {setlogout(false)}}
          logout={() => {
            logOut(dispatch);
            history.push("/");
          }}
        />
      )}
    </div>
  );
}

export default Settings;
