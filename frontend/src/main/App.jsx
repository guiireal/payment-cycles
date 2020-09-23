import React from "react";
import "../common/template/dependencies";

import Header from "../common/template/Header";
import Sidebar from "../common/template/Sidebar";
import Footer from "../common/template/Footer";

import Routes from "./routes";

export default (props) => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <div className="content-wrapper">
      <Routes />
    </div>
    <Footer />
  </div>
);
