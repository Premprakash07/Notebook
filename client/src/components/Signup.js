import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../css/signup.css";
import { login, register } from "../api/user";
import { useHistory } from "react-router-dom";

function Signup() {
  const initialformData = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    author: "",
    confirm_password: "",
  };
  const [issignup, toggleissignup] = useState(false);
  const [formData, setformdata] = useState(initialformData);
  const [cnferror, setcnferror] = useState(false);
  const [error, seterror] = useState(true);
  const [client_err, setclineterr] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    document.title = "Notebook | Sign up";
  });

  useEffect(() => {
    if (formData.password !== formData.confirm_password) {
      setcnferror(true);
    }
    if (formData.password === formData.confirm_password) {
      setcnferror(false);
    }
  }, [formData.password, formData.confirm_password]);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const togglesignup = () => {
    toggleissignup((prevstate) => !prevstate);
    setformdata(initialformData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(cnferror);
    // if (formData.password !== formData.confirm_password) {
    //   setcnferror(true);
    //   console.log(formData.password, formData.confirm_password, cnferror);
    // }
    // if (formData.password === formData.confirm_password) {
    //   console.log(formData.password, formData.confirm_password, cnferror);
    //   setcnferror(false);
    // }
    if (issignup && !cnferror) {
      const submitData = {
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        password: formData.password,
        author: formData.fname + " " + formData.lname,
      };

      const stat = await register(submitData, dispatch);
      seterror(true);
      setclineterr(stat);
      history.push("/");
    } else if (!issignup) {
      const submitData = {
        email: formData.email,
        password: formData.password,
      };

      const stat = await login(submitData, dispatch);
      seterror(true);
      setclineterr(stat);
      history.push("/");
    }
  };

  return (
    <div id="signup">
      <div className="signup-container">
        {/* <img src="" alt="sign-logo" className="sign-logo" /> */}

        <div className="signup-head">
          {issignup ? "Sign Up" : "Log in to your account"}
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <div className="client-err err">{client_err}</div>}

          {issignup && (
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              required
              value={formData.fname}
              onChange={handleChange}
              autoFocus
            />
          )}

          {issignup && (
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              required
              value={formData.lname}
              onChange={handleChange}
            />
          )}

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
            autoFocus
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            id="password"
            className="password"
            placeholder="Password"
            required
            value={formData.password}
            onChange={handleChange}
            minLength="8"
          />

          {issignup && (
            <div className="cnf-pwd-container pwd">
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                className="confirm-password password"
                placeholder="Confirm Password"
                required
                value={formData.confirm_password}
                onChange={handleChange}
                minLength="8"
              />
              {cnferror && (
                <div className="match-err err">* Password didn't match</div>
              )}
            </div>
          )}

          <button type="submit">{issignup ? "Sign Up" : "Sign In"}</button>

          {/* {issignup && (
            <button className="google-sign-in-btn">Sign Up with Google</button>
          )} */}

          <div className="already-acc-new-acc" onClick={togglesignup}>
            {issignup
              ? "Already have an account? Log In"
              : "New to Notebook? Sign up"}
          </div>
        </form>
      </div>
      <div className="signup-bg">Notebook</div>
    </div>
  );
}

export default Signup;
