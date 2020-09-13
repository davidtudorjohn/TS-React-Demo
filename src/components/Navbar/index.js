import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div id="navbar-container">
      <h1 id="logo">amazin</h1>
      <ul id="nav-list">
        <li className="nav-item">
          <a>Menu</a>
        </li>
        <li className="nav-item">
          <a>Sign up</a>
        </li>
        <li className="nav-item">
          <a className="primary-btn">Login</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
