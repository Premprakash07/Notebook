import User from "../schema/user.js";
import bcryptjs from "bcryptjs";

const salt = 10;

export const Login = (req, res) => {
  const email = req.body.email;
  const pwd = req.body.password;

  User.findOne({ email: email }, (error, found) => {
    if (error) {
      console.log("Error: ", error);
    } else {
      if (found) {
        bcryptjs.compare(pwd, found.password, (err, result) => {
          if (result) {
            req.session.user = found;
            console.log(found);
            res.status(200).send({ ...found, status: "user found" });
          } else {
            res.status(400).send({ status: "Password didn't match." });
          }
        });
      } else {
        res.status(400).send({ status: "User doesn't exist." });
      }
    }
  });
};

export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    }
    res.clearCookie("session-id");
    res.status(200).json("logout out");
  });
};

export const isAuth = (req, res) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  }
};

export const Register = async (req, res) => {
  await User.findOne({ email: req.body.email }, (err, found) => {
    if (err) {
      res
        .status(400)
        .send({ ...err, status: "Sorry! An error occured.Try again." });
    }
    if (found) {
      res.status(400).send({ status: "User already exist." });
    }
  });
  bcryptjs.hash(req.body.password, salt, async (err, hash) => {
    const newuser = new User({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: hash,
      author: req.body.author,
    });
    req.session.user = newuser;
    await newuser.save();
    res.status(200).json({ _doc: newuser });
  });
};

export const deleteUser = async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.status(200).json({ deleted: true });
};

export const deleteAllusedata = async (req, res) => {};
