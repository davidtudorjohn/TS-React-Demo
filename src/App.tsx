import React, { useState } from "react";
import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
// import SearchResults from "./components/SearchResults";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Spinner from "./components/Spinner";
import SearchPage from "./components/SearchPage";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setQuery(e.target.value);
    if (query.length == 0) {
      setIsSearch(false);
    }

    // setTimeout((e.target.value : string) => {
    //   setQuery(e.target.value);
    // }, 600);
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.length > 0) {
      setIsSearch(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    console.log(query);
  };
  var queryURI = query.split(" ").join("%20");
  return (
    <Router>
      {isSearch ? <Redirect to={`/&query=${queryURI}`} /> : null}

      <div className="App">
        <Navbar
          handleInputChange={handleInputChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path={`/&query=${query}`}
            render={() => <SearchPage query={query} />}
          />
        </Switch>
        {isLoading ? <Spinner /> : null}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
