import React, { useState } from "react";
import "../css/pwdsettings.css";
// import Cnfpwd from "./modals/Cnfpwd";

function Pwdsettings() {
  const intialformdata = {
    pwd: "",
    new_pwd: "",
    cnf_new_pwd: "",
  };
  const [formdata, setformdata] = useState({ intialformdata });
  const [cnferror, setcnferror] = useState(false);

  const handleChange = (e) => {
    setformdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (formdata.new_pwd !== formdata.cnf_new_pwd) {
      setcnferror(true);
    }
  };

  return (
    <div id="pwd-settings">
      <form className="pwd-form">
        <div className="pwd-container input">
          <label htmlFor="pwd">
            <div className="pwd">Password</div>
          </label>
          <input
            type="password"
            name="pwd"
            id="pwd"
            onChange={handleChange}
            value={formdata.pwd}
            required
          />
        </div>
        <div className="new_pwd-container input">
          <label htmlFor="new_pwd">
            <div className="new_pwd">New Password</div>
          </label>
          <input
            type="password"
            name="new_pwd"
            id="new_pwd"
            onChange={handleChange}
            value={formdata.new_pwd}
            required
          />
        </div>
        <div className="cnf_new_pwd-container input">
          <label htmlFor="cnf_new_pwd">
            <div className="cnf_new_pwd">Re-enter new password</div>
          </label>
          <input
            type="password"
            name="cnf_new_pwd"
            id="email"
            onChange={handleChange}
            value={formdata.cnf_new_pwd}
            required
          />
        </div>
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
    </div>
  );
}

export default Pwdsettings;
