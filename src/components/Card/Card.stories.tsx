import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "shadow"],
    },
    className: {
      control: false,
    },
    children: {
      control: false,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "default",
    className: "",
  },
  render: (args) => (
    <Card {...args}>
      <Card.Header>Header Title</Card.Header>
      <Card.Body>
        <p>
          This is the body of the card. Customize the props from the Storybook
          controls.
        </p>
      </Card.Body>
      <Card.Footer>
        <button>Action</button>
      </Card.Footer>
    </Card>
  ),
};
