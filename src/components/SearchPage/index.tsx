import React from "react";
import SearchResults from "../SearchResults";
import "./searchpage.css";
import { Redirect } from "react-router-dom";
interface Props {
  query: string;
  isSearch: boolean;
}
const SearchPage = (props: Props) => {
  return props.isSearch ? (
    <div id="search-page-container">
      <SearchResults query={props.query} />
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default SearchPage;
