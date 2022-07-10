// require("dotenv").config();
import mongoose from "mongoose";

const Connection = async () => {
  const Url =
    "mongodb+srv://premprakash:notebookDB@notebook.nr1os.mongodb.net/notebook?retryWrites=true&w=majority";

  await mongoose
    .connect(Url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(console.log("Database connected successfully"))
    .catch((err) => console.log(err));
};

export default Connection;
