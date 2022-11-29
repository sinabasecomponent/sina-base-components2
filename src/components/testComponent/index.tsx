import React from "react";
import { useStyle } from "./style";
interface TestProps {
  title: string;
  name: string;
  onClick: () => void;
}
const Test = ({}: TestProps) => {
  const classes = useStyle();
  return (
    <div className={classes.border}>
      test component
    </div>
  );
};

export { Test };
