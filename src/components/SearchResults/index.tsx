import React from "react";
interface Props {
  query: string;
}
const SearchResults = (props: Props) => {
  return (
    <div>
      Showing results for <strong>{props.query}</strong>
    </div>
  );
};
export default SearchResults;
