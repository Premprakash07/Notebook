import React, { useRef } from "react";
import "../../css/sidenav.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

function Sidenav({ closeNav, toggle }) {
  const overlay = useRef();

  const closeModel = (e) => {
    if (e.target === overlay.current) {
      closeNav(false);
    }
  };

  return (
    <div
      className={toggle ? "sidenav sidenav-animate" : "sidenav"}
      ref={overlay}
      onClick={closeModel}
    >
      <div className="sidenav-container">
        <div className="nav-top">
          <div className="ham" onClick={() => closeNav(false)}>
            <MenuIcon style={{ fontColor: "inherit", fontSize: "inherit" }} />
          </div>
          <Link to="/" onClick={() => closeNav(false)}>
            <span>NOTEBOOK</span>
          </Link>
        </div>
        <div className="sidenav-navigation">
          <div className="nav">
            <Link to="/notes" onClick={() => closeNav(false)}>
              <div>
                <h4>Notes</h4>
              </div>
            </Link>
            <Link to="/blogs" onClick={() => closeNav(false)}>
              <div>
                <h4>Blogs</h4>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
