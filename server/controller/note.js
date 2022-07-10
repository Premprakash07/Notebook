import Note from "../schema/note.js";

export const uploadnote = async (req, res) => {
  const newnote = Note({
    note_title: req.body.note_title,
    note_content: req.body.note_content,
    author: req.body.author,
    lastupdated: req.body.lastupdated,
    createdon: req.body.createdon,
  });
  await newnote.save();
  res.send({ status: "note uploaded" });
};

export const getallnotes = async (req, res) => {
  await Note.find({ author: req.params.author }, (err, found) => {
    res.send(found);
  });
};

export const updatenote = async (req, res) => {
  const noteid = req.params.id;
  const newnote = {
    note_title: req.body.note_title,
    note_content: req.body.note_content,
    author: req.body.author,
    lastupdated: req.body.lastupdated,
    createdon: req.body.createdon,
  };
  await Note.findByIdAndUpdate(noteid, { $set: newnote });
  res.status(200).json("note updated");
};

export const deletenote = async (req, res) => {
  const noteid = req.params.id;
  await Note.findByIdAndRemove(noteid);
  res.status(200).json({ deleted: true });
};

export const deleteAllnote = async () => {
  // const userid = userid;
  // await Note.deleteMany({id: userid})
}
