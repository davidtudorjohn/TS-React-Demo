import "./navbar.css";
import React, { Component } from "react";
// const React = require("react");

type State = {
  query: string;
};
class Navbar extends Component<{}, State> {
  tick() {
    this.setState({
      query: "",
    });
  }
  componentWillMount() {
    this.tick();
  }
  componentDidMount() {}
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      query: e.target.value,
    });
  };
  render() {
    return (
      <>
        <div id="navbar-container">
          <h1 id="logo">
            amazin<span id="logoSpan">web</span>
          </h1>
          <form
            id="navbar-search-form"
            name="search-form"
            onSubmit={() => alert("Form Submitted Successfully")}
          >
            <label id="navbar-search-form-label">
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  this.handleInputChange(e)
                }
                id="navbar-search-input"
                type="text"
                placeholder="Search for anything"
              />
              <button
                id="navbar-search-form-btn"
                type="submit"
                form="search-form"
              >
                <span className="fa fa-search">Search</span>
              </button>
            </label>
          </form>
          <ul id="nav-list">
            <li className="nav-item">
              <a href="#">Menu</a>
            </li>
            <li className="nav-item">
              <a href="#">Sign up</a>
            </li>
            <li className="nav-item">
              <a className="primary-btn" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default Navbar;
