import React, { Component } from "react";
import "./navbar.css";
type NavbarState = {
  query: string;
};
class Navbar extends Component<{}, NavbarState> {
  render() {
    return (
      <div id="navbar-container">
        <h1 id="logo">
          amazin<span id="logoSpan">web</span>
        </h1>
        <form id="navbar-search-form">
          <label id="navbar-search-form-label">
            <input
              id="navbar-search-input"
              type="text"
              placeholder="Search for anything"
            />
            <button id="navbar-search-form-btn">
              <span className="fa fa-search">Search</span>
            </button>
          </label>
        </form>
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
  }
}
export default Navbar;
