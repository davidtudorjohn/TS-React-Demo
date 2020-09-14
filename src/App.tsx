import React, { useState } from "react";
import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// type State = {
//   query: string;
// };
// tick() {
//   this.setState({
//     query: "",
//   });
// }
// componentWillMount() {
//   this.tick();
// }

function App() {
  const [query, setQuery] = useState<string>("");
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    if (e.target.value == "") {
      setIsSearch(false);
    }

    // setTimeout((e.target.value : string) => {
    //   setQuery(e.target.value);
    // }, 600);
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSearch(true);
    console.log(query);
  };
  return (
    <Router>
      <div className="App">
        <Navbar
          handleInputChange={handleInputChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
        {isSearch ? <SearchResults query={query} /> : null}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
