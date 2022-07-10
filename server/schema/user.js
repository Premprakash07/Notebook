import mongoose from "mongoose";

const Userschema = {
  fname: String,
  lname: String,
  email: String,
  password: String,
  author: String,
};

const User = mongoose.model("User", Userschema);

export default User;
