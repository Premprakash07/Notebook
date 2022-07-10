import mongoose from "mongoose";

const Noteschema = {
  note_title: String,
  note_content: String,
  author: String,
  createdon: String,
  lastupdated: String
};

const Note = mongoose.model("Note", Noteschema);

export default Note;
