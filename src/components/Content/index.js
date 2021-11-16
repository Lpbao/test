import React from "react";
import Banner from "./banner";
import Header from "./Header";
import Main from "./Main";
import "./style.css";

const Content = () => {
  return (
    <div className="content">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default Content;
