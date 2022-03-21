import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return <div className="header">
    <h1>
      <img className="header_img" src="img/header-logo.png" alt="logo" />
      <Link to="/" className="title">Hocavoca</Link>
    </h1>
    <div className="container">
    <div className="menu">
      <div className="gage"></div>
      <Link to="/create_word" className="link">
      Add Word
      </Link>
    </div>
    <div className="menu">
      <div className="gage"></div>
      <Link to="/create_day" className="link">
        Add Day
      </Link>
    </div>
    </div>
  </div>;
}
