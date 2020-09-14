import React from "react";
import "./searchresults.css";
interface Props {
  query: string;
}
const SearchResults = (props: Props) => {
  return props.query.length > 0 ? (
    <div id="search-results-container">
      Showing results for <strong>{props.query}</strong>
    </div>
  ) : null;
};
export default SearchResults;
