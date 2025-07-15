import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    text: { control: "text" },
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    trigger: {
      control: "radio",
      options: ["click", "hover"],
    },
    className: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    text: "Tooltip message",
    position: "top",
    trigger: "hover",
  },
  render: (args) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Tooltip {...args}>
        <button>Hover or focus me</button>
      </Tooltip>
    </div>
  ),
};
