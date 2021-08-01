import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";

const MockedHeader = () => {
  return (
    <Router>
      <Header />
    </Router>
  );
};

describe("Header Component", () => {
  it("should renders header component", () => {
    render(<MockedHeader />);
    const HeaderElement = screen.getByTestId("header-test");
    expect(HeaderElement).toBeTruthy();
  });
});
