// package
import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
// custom
import "./index.css";
import "./Home.css";
import App from "./search/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./switchPages/Home";
import Product from "./switchPages/Product";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<App/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
    </Routes>
  </BrowserRouter>
);
