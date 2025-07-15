import React from "react";
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Accordion from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      { title: "Section 1", content: <p>Content of section 1</p> },
      { title: "Section 2", content: <p>Content of section 2</p> },
      { title: "Section 3", content: <p>Content of section 3</p> },
    ],
  },
};
