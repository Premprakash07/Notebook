import React, { useState } from "react";
import "../../css/notemodal.css";
import noteschema from "../../schema/notesschema";
import { useSelector } from "react-redux";

function Notemodal(props) {
  const addoredit = props.addoredit;
  const [noteData, setnote] = useState(addoredit ? noteschema : props.note);
  const user = useSelector((store) => store.user);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setnote((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const note = {
      note_title: noteData.note_title.trim(),
      note_content: noteData.note_content.trim(),
      createdon: new Date().toDateString(),
      lastupdated: addoredit ? false : new Date().toDateString(),
      author: user.author.trim(),
    };
    (await addoredit)
      ? props.savenote(note)
      : props.updatenote(note, props.note._id);

    setnote(noteschema);
    props.close();
  };

  const discard = () => {
    setnote(noteschema);
    props.close();
  };

  return (
    <div id="add-modal" className="add-modal-backdrop">
      <form className="addnote-modal" onSubmit={handlesubmit}>
        <h2>{addoredit ? "Add Note" : "Edit Note"}</h2>
        <input
          type="text"
          name="note_title"
          id="title"
          value={noteData.note_title}
          onChange={handleChange}
          placeholder="Title"
          required
          autoFocus
          autoComplete="off"
        />
        <textarea
          name="note_content"
          id="note_content"
          cols="30"
          rows="50"
          value={noteData.note_content}
          onChange={handleChange}
          placeholder="Note"
          required
          autoComplete="off"
        />
        <div className="add-option">
          <button type="submit" className="save-btn">
            Save
          </button>
          <button className="discard-btn" onClick={discard}>
            Discard
          </button>
        </div>
      </form>
    </div>
  );
}

export default Notemodal;
