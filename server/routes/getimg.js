import express from "express";
import { deleteimg, getImg } from "../controller/img.js";

const Router = express();

Router.get("/:path", getImg);

Router.post("/delete/:filename", deleteimg);

export default Router;
