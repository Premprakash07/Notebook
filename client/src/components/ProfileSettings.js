import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/useraction";
import { deleteuser, updateProfile } from "../api/user";
import "../css/profilesetting.css";
import { useHistory } from "react-router";
import Cnfpwd from "./modals/Cnfpwd";

function ProfileSettings(props) {
  const user = useSelector((store) => store.user);
  const [formdata, setformdata] = useState(user);
  const [cnfpwd, setcnfpwd] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const deleteacc = async () => {
    await deleteuser(user._id);
    dispatch({ type: actions.LOG_OUT });
    history.push("/");
  };

  const handleChange = (event) => {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    console.log(formdata);
  };

  const saveUpdate = async () => {
    await updateProfile(formdata);
  };

  return (
    <div id="profile-settings">
      <form className="profile-form">
        <div className="fname-container input">
          <label htmlFor="fname">
            <div className="fname">First Name</div>
          </label>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={handleChange}
            value={formdata.fname}
            required
          />
        </div>
        <div className="lname-container input">
          <label htmlFor="lname">
            <div className="lname">Last Name</div>
          </label>
          <input
            type="text"
            name="lname"
            id="lname"
            onChange={handleChange}
            value={formdata.lname}
            required
          />
        </div>
        <div className="email-container input">
          <label htmlFor="email">
            <div className="email">Email</div>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={formdata.email}
            required
          />
        </div>
        <button className="save-btn" onClick={saveUpdate}>
          Save
        </button>
        <div className="delete-acc" onClick={() => setcnfpwd(true)}>
          Delete Account
        </div>
      </form>
      {cnfpwd && <Cnfpwd continue={deleteacc} close={() => setcnfpwd(false)} />}
    </div>
  );
}

export default ProfileSettings;
