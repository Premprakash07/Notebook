import mongoose from "mongoose";

const Blogschema = {
  blog_title: String,
  blog_content: String,
  author: String,
  createdon: String,
  lastupdated: String,
  img_name: String,
  blog_image: String,
};

const Blog = mongoose.model("Blog", Blogschema);

export default Blog;
