import "./navbar.css";
import React, { Component } from "react";

// type State = {
//   query: string;
// };
interface Props {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
class Navbar extends Component<Props> {
  // tick() {
  //   this.setState({
  //     query: "",
  //   });
  // }
  // componentWillMount() {
  //   this.tick();
  // }
  // componentDidMount() {}
  // handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(this.state.query);

  //   this.setState({
  //     query: e.target.value,
  //   });
  // };
  // handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log(this.state.query);
  // }
  render() {
    return (
      <div id="navbar-container">
        <h1 id="logo">
          amazin<span id="logoSpan">web</span>
        </h1>
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
    );
  }
}
export default Navbar;
