import React from "react";
import Notes from "./Notes";
import Blogs from "./Blogs";
import "../css/main.css";
import Signup from "./Signup";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Notemodal from "./modals/Notemodal";
import Settings from "./Settings";
import { useSelector } from "react-redux";
// import Delete from "./modals/Delete";
// import Logout from "./modals/Logout";
// import Cnfpwd from "./modals/Cnfpwd";
// import Popup from "./modals/Popup";
import Profile from "./modals/Profile";

function Main() {
  const user = useSelector((store) => store.user);

  return (
    <div class="main">
      {user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={Notemodal} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />
          {/* <Route exact path="/delete" component={Delete} />
          <Route exact path="/popup" component={Popup} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/cnfpwd" component={Cnfpwd} /> */}
        </Switch>
      ) : (
        <Signup />
      )}
    </div>
  );
}

export default Main;
