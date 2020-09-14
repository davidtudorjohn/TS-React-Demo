import React from "react";
import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

// const React = require("react");
// const Navbar = require("./components/Navbar");

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
