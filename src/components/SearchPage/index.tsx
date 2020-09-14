import React from "react";
import SearchResults from "../SearchResults";
import "./searchpage.css";
interface Props {
  query: string;
}
const SearchPage = (props: Props) => {
  return (
    <div id="search-page-container">
      <SearchResults query={props.query} />
    </div>
  );
};
export default SearchPage;
