import React from "react";
interface Props {
  query: string;
}
const SearchResults = (props: Props) => {
  return <div>Search results for: {props.query} </div>;
};
export default SearchResults;
