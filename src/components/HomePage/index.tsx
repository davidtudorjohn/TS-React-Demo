import React, { Component } from "react";
import Spinner from "../Spinner";
import "./homepage.css";
interface State {
  isLoading: boolean;
}
class HomePage extends Component<{}, State> {
  tick() {
    this.setState({
      isLoading: true,
    });
  }
  componentWillMount() {
    this.tick();
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 2000);
  }
  render() {
    return this.state.isLoading ? (
      <Spinner />
    ) : (
      <div id="homepage-container">
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default HomePage;
