import React, { useState } from "react";
import "../../css/opennotemodal.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Delete from "./Delete";

function OpennoteModal(props) {

  const [deletenote, setdeletenote] = useState(false)
  const deletefunc = () => {
    props.deletnote(props.note._id);
  };

  return (
    <div id="opennotemodal">
      <div className="opennotemodal-container">
        <div className="close-modal-btn">
          <IoCloseOutline onClick={props.closeNote} />
        </div>
        <div className="top">
          <div className="title">{props.note.note_title}</div>
          <div className="note-option">
            <MdModeEdit className="edit" onClick={props.editnote} />
            <MdDelete className="delete" onClick={() => setdeletenote(true)} />
          </div>
        </div>
        <pre className="body">{props.note.note_content}</pre>
      </div>
      {deletenote && <Delete close={() => {setdeletenote(false)}} deletefunc={deletefunc} title={props.note.note_title} />}
    </div>
  );
}

export default OpennoteModal;
