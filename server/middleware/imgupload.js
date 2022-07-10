import multer, { diskStorage } from "multer";
import { GridFsStorage } from "multer-gridfs-storage";

// const storage = diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./img-upload/");
//   },
//   filename: (req, file, callback) => {
//     // console.log(file);
//     callback(
//       null,
//       "image" + "-" + Date.now() + path.extname(file.originalname)
//     );
//   },
// });

// const fileFilter = (req, file, callback) => {
//   callback(null, true);
// };

const storage = new GridFsStorage({
  url: "mongodb+srv://premprakash:notebookDB@notebook.nr1os.mongodb.net/notebook?retryWrites=true&w=majority",
  options: {
    useUnifiedTopology: true,
  },
  file: (req, file) => {
    return {
      bucketName: "photos",
      filename: Date.now() + "-" + file.originalname,
    };
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
