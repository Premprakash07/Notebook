import Blog from "../schema/blog.js";
import { deleteimg } from "./img.js";

export const uploadblog = async (req, res) => {
  const newblog = Blog({
    blog_title: req.body.blog_title,
    blog_content: req.body.blog_content,
    author: req.body.author,
    lastupdated: req.body.lastupdated,
    createdon: req.body.createdon,
    img_name: req.body.img_name ? req.body.img_name : "DefaultBlogImg",
    blog_image: req.body.blog_image && req.body.blog_image,
  });
  await newblog.save();
  res.send({ status: "note uploaded" });
};

export const getallblogs = (req, res) => {
  Blog.find({ author: req.params.author }, (err, found) => {
    if (err) {
      res.status(400);
    }
    res.status(200).json(found);
  });
};

export const updateblog = async (req, res) => {
  console.log("dfal");
  const blogid = req.params.id;
  await deleteimg(req.body.img_name);
  const newblog = {
    blog_title: req.body.blog_title,
    blog_content: req.body.blog_content,
    author: req.body.author,
    lastupdated: req.body.lastupdated,
    createdon: req.body.createdon,
    img_name: req.body.img_name ? req.body.img_name : "DefaultBlogImg",
    blog_image: req.body.blog_image && req.body.blog_image,
  };
  await Blog.findByIdAndUpdate(blogid, { $set: newblog });
  res.status(200).json("blog updated");
};

export const deleteblog = async (req, res) => {
  const blogid = req.params.id;
  await Blog.findByIdAndRemove(blogid);
  res.status(200).json({ deleted: true });
};
