// package
import React from "react";
import ReactDOM from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
// custom
import "./index.css";
import "./Home.css"
import App from "./search/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //  <App></App>
  <App/>
  // </React.StrictMode>
);
