import React from "react";
import "../../css/delete.css";

function Delete(props) {
  return (
    <div id="delete-modal">
      <div className="delete-modal-container">
        <div className="delete">Do you want to delete '{props.title}' ?</div>
        <div className="delete-modal-option">
          <button className="delete-btn" onClick={props.deletefunc}>Delete</button>
          <button className="cancel-btn" onClick={props.close}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Delete;
