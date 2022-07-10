import React, { useState } from "react";
import "../../css/cnfpwd.css";

function Cnfpwd() {
  const [cnfpwd, setcnfpwd] = useState({
    cnfpwd: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setcnfpwd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="cnfpwd-modal">
      <div className="cnfpwd-modal-container">
        <div className="cnfpwd">
          Please enter the password to proceed further
        </div>
        <input
          type="password"
          name="cnfpwd"
          className="pwd-input"
          onChange={handleChange}
          value={cnfpwd.cnfpwd}
        />
        <button className="continue">Delete</button>
      </div>
    </div>
  );
}

export default Cnfpwd;
