import React from "react";
interface TestProps {
  title: string;
  name: string;
  onClick: () => void;
}
const Test = ({}: TestProps) => {
  return <div>test component</div>;
};

export { Test };
