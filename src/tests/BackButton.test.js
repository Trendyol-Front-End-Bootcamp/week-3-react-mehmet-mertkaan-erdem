import React from "react";
import { render, screen } from "@testing-library/react";
import BackButton from "../components/BackButton/BackButton";
import { BrowserRouter as Router } from "react-router-dom";

const MockedGoBack = () => {
  return (
    <Router>
      <BackButton />
    </Router>
  );
};

describe("Back Button", () => {
  it("should renders button", () => {
    render(<MockedGoBack />);
    const backButtonElement = screen.getByTestId("button-test");
    expect(backButtonElement).toBeTruthy();
  });
});
