import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  const items = [
    { title: "One", content: <p>First</p> },
    { title: "Two", content: <p>Second</p> },
  ];

  it("renders all titles", () => {
    render(<Accordion items={items} />);
    expect(screen.getByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("toggles content on click", () => {
    render(<Accordion items={items} />);
    const titleOne = screen.getByText("One");
    fireEvent.click(titleOne);
    expect(screen.getByText("First")).toBeInTheDocument();
    fireEvent.click(titleOne);
    expect(screen.queryByText("First")).not.toBeInTheDocument();
  });

  it("allows multiple open if prop is set", () => {
    render(<Accordion items={items} allowMultipleOpen />);
    fireEvent.click(screen.getByText("One"));
    fireEvent.click(screen.getByText("Two"));
    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
  });
});
