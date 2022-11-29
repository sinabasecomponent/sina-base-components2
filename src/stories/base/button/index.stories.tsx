import {
  Meta,
  Story,
} from "@storybook/react/types-6-0";
import {
  Button,
  ButtonProps,
} from "../../../components/button/button";
import React from "react";

export default {
  title: "button/regularButton",
  component: Button,
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  label: "sag",
};
