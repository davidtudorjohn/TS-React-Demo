import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div id="navbar-container">
      <h1 id="logo">Logo</h1>
      <ul id="nav-list">
        <li className="nav-item">
          <a>Link</a>
        </li>
        <li className="nav-item">
          <a>Link</a>
        </li>
        <li className="nav-item  primary-btn">
          <a>Link</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
