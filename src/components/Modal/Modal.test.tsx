import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("renders children when open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <Modal.Header>Header</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const mockClose = jest.fn();

    render(
      <Modal isOpen={true} onClose={mockClose}>
        <Modal.Header>Close Me</Modal.Header>
        <Modal.Body>Bye</Modal.Body>
      </Modal>
    );

    fireEvent.click(screen.getByText("×"));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when isOpen is false", () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <Modal.Body>Should not appear</Modal.Body>
      </Modal>
    );

    expect(container.firstChild).toBeNull();
  });
});
