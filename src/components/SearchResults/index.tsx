import React from "react";
import "./searchresults.css";
interface Props {
  query: string;
}
const SearchResults = (props: Props) => {
  return (
    <div id="search-results-container">
      Showing results for <strong>{props.query}</strong>
    </div>
  );
};
export default SearchResults;
