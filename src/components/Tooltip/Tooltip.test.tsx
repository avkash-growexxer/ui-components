import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("renders children and shows tooltip on hover", () => {
    render(
      <Tooltip text="Tooltip Text">
        <button>Hover me</button>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByText("Hover me"));
    expect(screen.getByText("Tooltip Text")).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText("Hover me"));
    expect(screen.queryByText("Tooltip Text")).not.toBeInTheDocument();
  });

  it("shows tooltip on focus and hides on blur", () => {
    render(
      <Tooltip text="Focus Tooltip">
        <button>Focus me</button>
      </Tooltip>
    );

    const button = screen.getByText("Focus me");
    fireEvent.focus(button);
    expect(screen.getByText("Focus Tooltip")).toBeInTheDocument();

    fireEvent.blur(button);
    expect(screen.queryByText("Focus Tooltip")).not.toBeInTheDocument();
  });

  it("shows tooltip on click", () => {
    render(
      <Tooltip text="Click Tooltip" trigger="click">
        <button>Click me</button>
      </Tooltip>
    );

    const button = screen.getByText("Click me");
    fireEvent.click(button);
    expect(screen.getByText("Click Tooltip")).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText("Click Tooltip")).not.toBeInTheDocument();
  });
});
