import { actions } from "../actions/useraction";

export const login = async (submitData, dispatch) => {
  let retstatus;
  await fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitData),
  })
    .then((res) => res.json())
    .then((data) => {
      retstatus = data.status;
      dispatch({
        type: actions.LOG_IN,
        value: data._doc,
      });
    });
  return retstatus;
};

export const register = async (submitData, dispatch) => {
  let retstatus;
  await fetch("/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(submitData),
  })
    .then((res) => res.json())
    .then((data) => {
      retstatus = data.status;
      dispatch({
        type: actions.LOG_IN,
        value: data._doc,
      });
    });
  return retstatus;
};

export const isAuth = async (dispatch) => {
  await fetch("http://localhost:3001/isAuth")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: actions.LOG_IN,
        value: data,
      });
    });
};

export const logOut = async (dispatch) => {
  await fetch("/logout").then((res) => res.json());
  dispatch({
    type: actions.LOG_OUT,
  });
};

export const updateProfile = async (update) => {
  await fetch("/update", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

export const deleteuser = async (id) => {
  await fetch(`/delete/${id}`, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
