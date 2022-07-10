import React from "react";
import "../../css/logout.css";

function Logout(props) {
  return (
    <div id="logout-modal">
      <div className="logout-modal-container">
        <div className="logout">Do you want to Logout ?</div>
        <div className="logout-modal-option">
          <button className="logout" onClick={props.logout}>Logout</button>
          <button className="cancel" onClick={props.close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Logout;
