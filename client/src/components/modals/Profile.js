import React from "react";
import { useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logOut } from "../../api/user";
import "../../css/profile.css";

function Profile() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div id="profile-modal">
      <div className="profile-container">
        <div className="head">
          <div className="profile-img">P</div>
          <div className="email">{user.email}</div>
          <div className="name">{user.author}</div>
        </div>
        <div className="profile-body">
          <div
            className="log-out"
            onClick={() => {
              logOut(dispatch);
              history.push("/");
            }}
          >
            Log out <FiLogOut className="logout-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
