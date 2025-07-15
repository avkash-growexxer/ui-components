import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
    },
    isOpen: {
      control: false,
      type: "boolean",
    },
    onClose: {
      control: false,
      type: "function",
    },
    children: {
      control: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    size: "md",
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>Open Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          size={args.size}
        >
          <Modal.Header>Dynamic Size Modal</Modal.Header>
          <Modal.Body>
            <p>
              You can dynamically change the <strong>size</strong> of the modal
              from the controls panel in Storybook.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
