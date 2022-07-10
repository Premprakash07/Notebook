import gridfs from "gridfs-stream";
import mongoose from "mongoose";

const conn = mongoose.connection;
let gfs;
conn.once("open", () => {
  gfs = gridfs(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

export const getImg = async (req, res) => {
  const path = req.params.path;
  const file = await gfs.files.findOne({ filename: path });
  const readstream = gfs.createReadStream(file.filename);
  readstream.pipe(res);
};

export const deleteimg = async (filename) => {
  await gfs.remove({ root: "photos", filename: filename }, (err, grid) => {
    if (err) {
      res.status(400).json("error removing file");
      console.log(err);
    }
  });
};
