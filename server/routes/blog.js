import express from "express";
import {
  deleteblog,
  getallblogs,
  updateblog,
  uploadblog,
} from "../controller/blog.js";
import upload from "../middleware/imgupload.js";

const Router = express.Router();

Router.post("/upload", upload.single("blog_image"), uploadblog);

Router.get("/getall/:author", getallblogs);

Router.post("/delete/:id", deleteblog);

Router.post("/update/:id", upload.single("blog_image"), updateblog);


export default Router;
