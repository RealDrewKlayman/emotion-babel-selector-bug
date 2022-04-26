import React from "react";
import { render, screen } from "@testing-library/react";
import { TestComponent } from "../TestComponent";

describe("Test Component", () => {
  it("example test", () => {
    const { container } = render(<TestComponent />);

    expect(screen.getByText("Hi")).toBeInTheDocument();
  });
});
