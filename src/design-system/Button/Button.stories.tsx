import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Design System/Button",
  component: Button,
  args: {
    children: "Button",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { intent: "primary" },
};

export const Outline: Story = {
  args: { intent: "outline" },
};

export const Loading: Story = {
  args: { isLoading: true },
};

