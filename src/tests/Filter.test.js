import React from "react";
import { render, screen } from "@testing-library/react";
import Filter from "../components/Filters/Filter";
import { BrowserRouter as Router } from "react-router-dom";
const MockedFilterComponent = () => {
  return (
    <Router>
      <Filter />;
    </Router>
  );
};

describe("Filter Component", () => {
  it("should renders filter component", () => {
    render(<MockedFilterComponent />);
    const filterElement = screen.getByTestId("filter-test");
    expect(filterElement).toBeTruthy();
  });
});
