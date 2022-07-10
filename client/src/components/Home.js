import React, { useEffect, useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getallnotes } from "../api/note";
import { getallblogs } from "../api/blog";

function Home() {
  const [notedata, setnotedata] = useState([]);
  const [blogdata, setblogdata] = useState([]);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    document.title = "Notebook | Home";
  }, []);

  useEffect(() => {
    const getall = async () => {
      const note = await getallnotes(user.author);
      setnotedata(note);
      const blog = await getallblogs(user.author);
      setblogdata(blog);
    };
    getall();
  }, []);

  return (
    <div id="home">
      <Link to="/notes">
        <div className="note-link home-link-container">
          <h1 className="title">Notes</h1>
          <div className="quicklinks">
            {notedata.slice(0, 5).map((note) => (
              <div className="link">{note.note_title}</div>
            ))}
          </div>
        </div>
      </Link>
      <Link to="/blogs">
        <div className="blog-link home-link-container">
          <h1 className="title">Blogs</h1>
          <div className="quicklinks">
            {blogdata.slice(0, 5).map((blog) => (
              <div className="link">{blog.blog_title}</div>
            ))}
          </div>
        </div>
      </Link>
      {/* <Link to='/to-do'><div className="to-do-link home-link-container">
                <h1 className="title">To-do</h1>
                <div className="quicklinks">
                    <div className="link"><Link to='/notes/note1'>fasdhfjkasdfj</Link></div>
                    <div className="link"><Link to='/notes/note1'>fasdhfjkasdfj</Link></div>
                    <div className="link"><Link to='/notes/note1'>fasdhfjkasdfj</Link></div>
                    <div className="link"><Link to='/notes/note1'>fasdhfjkasdfj</Link></div>
                </div>
            </div></Link> */}
    </div>
  );
}

export default Home;
