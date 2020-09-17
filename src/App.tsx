import React, { useState } from "react";
import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Spinner from "./components/Spinner";
import SearchPage from "./components/SearchPage";

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
  };
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query.length > 0) {
      setIsSearch(true);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      setIsSearch(false);
    }
    console.log(query);
  };
  var queryURI = query.split(" ").join("%20");
  return (
    <Router>
      {isSearch ? <Redirect to={`/&query=${query}`} /> : null}

      <div className="App">
        <Navbar
          handleInputChange={handleInputChange}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route
            path={`/&query=${query}`}
            render={() => <SearchPage isSearch={isSearch} query={query} />}
          />
        </Switch>
        {isLoading ? <Spinner /> : null}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
