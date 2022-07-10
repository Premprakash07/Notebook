import React, { useEffect, useState } from "react";
import "../css/blog.css";
import AddIcon from "@material-ui/icons/Add";
import Openblogmodal from "./modals/Openblogmodal";
import Blogmodal from "./modals/Blogmodal";
import { deleteblog, getallblogs, uploadblog } from "../api/blog";
import { useSelector } from "react-redux";
import { updateblog } from "../api/blog";

function Blogs() {
  const [openblogstate, setopenblog] = useState(false);
  const [blogdata, setblogdata] = useState([]);
  const [blog, setblog] = useState({});
  const [blogmodal, setblogmodalstate] = useState(false);
  const [addoredit, setaddoreditstate] = useState(true);
  const user = useSelector((store) => store.user);
  // const url =
  //   "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  const refreshblog = async () => {
    const blogd = await getallblogs(user.author);
    setblogdata(blogd);
  };

  useEffect(() => {
    document.title = "Notebook | Blogs";
    refreshblog();
  }, []);

  const openBlog = (blog) => {
    setblog(blog);
    setopenblog(true);
  };

  const closeBlog = () => {
    setopenblog(false);
  };

  const openeditmodal = () => {
    setaddoreditstate(false);
    setopenblog(false);
    setblogmodalstate(true);
  };

  const openaddblog = () => {
    setaddoreditstate(true);
    setblogmodalstate(true);
  };

  const saveBlog = async (blog) => {
    await uploadblog(blog);
    refreshblog();
  };

  const updateBlog = async (blog, id) => {
    await updateblog(blog, id);
    refreshblog();
  };

  const deletefunc = async (id) => {
    await deleteblog(id);
    closeBlog();
    refreshblog();
  };

  return (
    <div id="blogs">
      <div className="section-name">Blogs</div>
      <div className="blogs-container">
        {blogdata.reverse().map((blog) => (
          <div className="blog" key={blog._id} onClick={() => openBlog(blog)}>
            <img src={blog.blog_image} alt="blog-img" className="blog-img" />
            <div className="blog-title">{blog.blog_title}</div>
            <div className="blog-detail">
              <div className="date">{blog.createdon}</div>
              {/* {blog.lastupdated !== "false" && (
                <div className="date">Last Updated: {blog.lastupdated}</div>
              )} */}
            </div>
            <pre className="blog-content">{blog.blog_content}</pre>
          </div>
        ))}
      </div>
      <div className="add-icon">
        <AddIcon style={{ fontSize: "inherit" }} onClick={openaddblog} />
      </div>
      {openblogstate && (
        <Openblogmodal
          blog={blog}
          closeblog={closeBlog}
          openeditmodal={openeditmodal}
          deleteblog={deletefunc}
        />
      )}
      {blogmodal && (
        <Blogmodal
          addoredit={addoredit}
          blog={blog}
          saveblog={saveBlog}
          updateblog={updateBlog}
          close={() => setblogmodalstate(false)}
        />
      )}
    </div>
  );
}

export default Blogs;
