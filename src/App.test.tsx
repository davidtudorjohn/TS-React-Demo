import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Login link", () => {
  const { getByText } = render(<App />);
  const loginElement = getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});
