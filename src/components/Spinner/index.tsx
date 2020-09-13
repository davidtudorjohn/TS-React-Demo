import React from "react";
import "./spinner.css";

const Spinner = (props: any) => {
  return props.isLoading ? (
    <div id="spinner-container">
      <div id="spinner"></div>
    </div>
  ) : (
    <></>
  );
};
export default Spinner;
