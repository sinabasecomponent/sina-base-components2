import React from "react";
import styles from "./button.module.scss";
import { useStyle } from "./style";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  const classes = useStyle();
  console.log(styles, "ss");
  return (
    <button className={styles["sag"]}>
      {props.label}
    </button>
  );
};

export { Button };
