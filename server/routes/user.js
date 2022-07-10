import express from "express";
import {
  isAuth,
  Login,
  Logout,
  Register,
  deleteUser,
} from "../controller/user.js";

const Router = express.Router();

Router.post("/register", Register);

Router.post("/login", Login);

Router.get("/isAuth", isAuth);

Router.get("/logout", Logout);

Router.post("/delete/:id", deleteUser);

Router.get("/get", () => {
  console.log("hello");
});

export default Router;
