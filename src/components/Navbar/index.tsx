import "./navbar.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
// type State = {
//   query: string;
// };
interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
class Navbar extends Component<Props> {
  render() {
    return (
      <div id="navbar-container">
        <Link to="/">
          <h1 id="logo">
            amazin<span id="logoSpan">web</span>
          </h1>
        </Link>
        <form
          id="navbar-search-form"
          name="search-form"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            this.props.handleSearchSubmit(e)
          }
        >
          <label id="navbar-search-form-label">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.props.handleInputChange(e)
              }
              id="navbar-search-input"
              type="text"
              placeholder="Search for anything"
            />
            <button
              id="navbar-search-form-btn"
              type="submit"
              form="navbar-search-form"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </label>
        </form>
        <ul id="nav-list">
          <li className="nav-item">
            <a href="#">Sign up</a>
          </li>
          <li className="nav-item">
            <Link className="primary-btn" to="/sign-in">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <button id="mobile-menu-toggle-button">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
export default Navbar;
