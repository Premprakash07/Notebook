import express from "express";
import { getallnotes, uploadnote, deletenote, updatenote } from "../controller/note.js";

const Router = express.Router();

Router.post("/upload", uploadnote);

Router.get("/getall/:author", getallnotes);

Router.post("/delete/:id", deletenote);

Router.post('/update/:id', updatenote)

export default Router;
