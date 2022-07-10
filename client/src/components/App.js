import React, { useEffect } from "react";
import "../css/App.css";
import Header from "./Header";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../api/user";
import configureStore from '../store/userstore'

function App() {
  const dispatch = useDispatch();
  let preloadedState = {};
  const store = configureStore(preloadedState);
  
  useEffect(() => {
    console.log(store.getState());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
