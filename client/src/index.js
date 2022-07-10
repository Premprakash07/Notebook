import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import configureStore from "./store/userstore";

let preloadedState = {};
const store = configureStore(preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
