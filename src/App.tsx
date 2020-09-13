import React from "react";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Spinner from "./components/Spinner/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Spinner isLoading={true} />
      <Footer />
    </div>
  );
}

export default App;
