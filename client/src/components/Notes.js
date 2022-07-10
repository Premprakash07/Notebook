import React, { useEffect, useState } from "react";
import "../css/notes.css";
import OpennoteModal from "./modals/OpennoteModal";
import { deletenote, updatenote, uploadnote } from "../api/note";
import AddIcon from "@material-ui/icons/Add";
import Notemodal from "./modals/Notemodal";
import { getallnotes } from "../api/note";
import { useSelector } from "react-redux";

function Notes() {
  const [addoredit, settype] = useState(true);
  const [addeditmodal, setstate] = useState(false);
  const [note, setopennote] = useState({});
  const [opennotestate, setnotestate] = useState(false);
  const [notesdata, setnotedata] = useState([]);
  const user = useSelector((store) => store.user);

  const refreshnote = async () => {
    const note = await getallnotes(user.author);
    setnotedata(note);
    console.log(note);
  };

  useEffect(() => {
    document.title = "Notebook | Note";
  }, []);

  useEffect(() => {
    refreshnote();
  }, []);

  const openNote = (note) => {
    setopennote(note);
    setnotestate(true);
  };

  const closeopennote = () => {
    setnotestate(false);
  };

  const editnote = () => {
    setnotestate(false);
    setstate(true);
    settype(false);
  };

  const openaddmodal = () => {
    settype(true);
    setstate(true);
  };

  const saveNote = async (note) => {
    await uploadnote(note);
    refreshnote();
  };

  const updateNote = async (note, id) => {
    await updatenote(note, id);
    refreshnote();
  };

  const deletefunc = async (id) => {
    await deletenote(id);
    closeopennote();
    refreshnote();
  };

  return (
    <div id="notes">
      <div className="section-name">Notes</div>
      <div className="notes-container">
        {notesdata.reverse().map((note) => (
          <div className="note" key={note._id} onClick={() => openNote(note)}>
            <div className="note-title">{note.note_title}</div>
            <pre className="note-body">{note.note_content}</pre>
            <div className="note-details">
              <div className="time-stamp">{note.createdon}</div>
              {note.lastupdated !== "false" && (
                <div className="time-stamp">
                  Last Updated: {note.lastupdated}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {opennotestate && (
        <OpennoteModal
          closeNote={closeopennote}
          note={note}
          editnote={editnote}
          deletnote={deletefunc}
        />
      )}
      {addeditmodal && (
        <Notemodal
          addoredit={addoredit}
          note={note}
          savenote={saveNote}
          updatenote={updateNote}
          close={() => {
            setstate(false);
          }}
        />
      )}
      <div className="add-icon">
        <AddIcon style={{ fontSize: "inherit" }} onClick={openaddmodal} />
      </div>
    </div>
  );
}

export default Notes;
