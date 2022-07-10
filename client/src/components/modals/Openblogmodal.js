import React, { useState } from "react";
import "../../css/openblogmodal.css";
import { IoCloseOutline } from "react-icons/io5";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Delete from "./Delete";

function Openblogmodal(props) {

  const [deleteblog, setdeleteblog] = useState(false)
  const url =
    "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  const deletefunc = () => {
    props.deleteblog(props.blog._id);
  };

  return (
    <div id="openblogmodal">
      <div className="openblogmodal-container">
        <div className="close-modal-btn">
          <IoCloseOutline onClick={() => props.closeblog()} />
        </div>
        <div className="title">
          <h2 className="heading">{props.blog.blog_title}</h2>
          <div className="blog-option">
            <div className="edit" onClick={props.openeditmodal}>
              <MdModeEdit />
            </div>
            <div className="delete" onClick={() => setdeleteblog(true)}>
              <MdDelete />
            </div>
          </div>
        </div>
        <div className="blog-body">
          <div className="img-and-details">
            <img
              src={props.blog.blog_image}
              alt=""
              className="img"
            />
            <div className="details">
              <div className="detail-title">
                Title :<br />
                <span>{props.blog.blog_title}</span>
              </div>
              <div className="date-created">
                Date Created :<br />
                <span>{props.blog.createdon}</span>
              </div>
              <div className="last-updated">
                Last Updated :<br />
                <span>
                  {props.blog.lastupdated !== "false"
                    ? props.blog.lastupdated
                    : props.blog.createdon}
                </span>
              </div>
              <div className="author">
                Author : <br />
                <span>{props.blog.author}</span>
              </div>
            </div>
          </div>
          <pre className="blog-content">{props.blog.blog_content}</pre>
        </div>
      </div>
      {deleteblog && (
        <Delete
          close={() => {
            setdeleteblog(false);
          }}
          deletefunc={deletefunc}
          title={props.blog.blog_title}
        />
      )}
    </div>
  );
}

export default Openblogmodal;
