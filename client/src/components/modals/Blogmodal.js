import React, { useState, useEffect } from "react";
import "../../css/blogmodal.css";
import { MdModeEdit } from "react-icons/md";
import blogschema from "../../schema/blogschema";
import { useSelector } from "react-redux";

function Blogmodal(props) {
  const addoredit = props.addoredit;
  const [blogdata, setblogdata] = useState(addoredit ? blogschema : props.blog);
  const user = useSelector((store) => store.user);
  const [imgPreview, setimgPreview] = useState(
    addoredit ? null : props.blog.blog_image
  );
  const [imgfile, setimgfile] = useState(null);
  const [imgchange, setimgchange] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setblogdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const imgChange = (e) => {
    setimgchange(true);
    const imgsrc = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setimgPreview(reader.result);
      setimgfile(reader.result);
    };
    reader.readAsDataURL(imgsrc);
    // setimgfile(imgsrc);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(imgfile);
    const fd = new FormData();
    fd.append("blog_title", blogdata.blog_title.trim());
    fd.append("blog_content", blogdata.blog_content.trim());
    fd.append("createdon", new Date().toDateString());
    fd.append("lastupdated", addoredit ? false : new Date().toDateString());
    fd.append("blog_image", imgchange ? imgfile : false);
    fd.append("img_name", blogdata.img_name);
    fd.append("author", user.author.trim());
    // const blog = {
    //   blog_title: blogdata.blog_title.trim(),
    //   blog_content: blogdata.blog_content.trim(),
    //   createdon: new Date().toDateString(),
    //   lastupdated: addoredit ? false : new Date().toDateString(),
    //   blog_image: blogdata.blog_image,
    //   author: user.author.trim(),
    // };
    console.log(fd.getAll);
    (await addoredit)
      ? props.saveblog(fd)
      : props.updateblog(fd, props.blog._id);

    setblogdata(blogschema);
    props.close();
  };

  return (
    <div id="blog-modal">
      <div className="blog-modal-container">
        <h2 className="heading">{addoredit ? "Add Blog" : "Edit Blog"}</h2>
        <form className="edit-contianer">
          <div className="blog-input">
            <div className="title-and-image">
              <input
                type="text"
                name="blog_title"
                className="blog_title"
                required
                value={blogdata.blog_title}
                onChange={handleChange}
                placeholder="Blog Title"
                autoFocus
                autoCapitalize="on"
              />
              <div className="img-container">
                <img src={imgPreview} alt="" className="blog-img" />
                <label htmlFor="upload">
                  <div className="upload-img">
                    <MdModeEdit />
                  </div>
                </label>
                <input
                  type="file"
                  name="blog_image"
                  id="upload"
                  className="upload"
                  onChange={imgChange}
                />
              </div>
            </div>
            <textarea
              name="blog_content"
              className="blog-content"
              value={blogdata.blog_content}
              onChange={handleChange}
              placeholder="Blog Content"
              required
            />
          </div>
        </form>

        <div className="add-options">
          <button type="submit" className="save-btn" onClick={handleSubmit}>
            Save
          </button>
          <button className="discard-btn" onClick={props.close}>
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blogmodal;
