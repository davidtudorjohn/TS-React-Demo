import React, { useState } from "react";
import Footer from "./components/Footer/index";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
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
    <div className="App">
      <Navbar
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <HomePage />
      {isSearch ? <SearchResults query={query} /> : ""}

      <Footer />
    </div>
  );
}

export default App;
