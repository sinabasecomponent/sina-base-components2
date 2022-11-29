import icomoonJson from "@sina-base/asset/src/icomoon/selection.json";
import classNames from "classnames";
import React from "react";
import { createIcomoonIconSet } from "./createIconSet";
import "./icon";
import { IconsNames } from "./iconNames";
const IconMoon = createIcomoonIconSet(icomoonJson);

interface BaseIconProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    "className" | "style" | "children" | "color"
  > {
  name?: IconsNames;
  size?: "xsmall" | "small" | "medium" | "large" | number;
  color?: string | string[];
  testID?: string;
  wrapperStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

const BaseIcon = ({
  name,
  color,
  size = 18,
  testID,
  wrapperStyle,
  wrapperClassName,
  ...rest
}: BaseIconProps) => {
  let fontSize: number = 18;
  if (typeof size === "number") {
    fontSize = size;
  } else {
    switch (size) {
      case "xsmall":
        fontSize = 12;
        break;
      case "small":
        fontSize = 14;
        break;
      case "medium":
        fontSize = 18;
        break;
      case "large":
        fontSize = 24;
        break;

      default:
        fontSize = 18;
    }
  }

  return (
    <div
      className={classNames(wrapperClassName)}
      style={{ display: "flex", ...wrapperStyle }}
      {...rest}
    >
      <IconMoon name={name} color={color} size={fontSize} testID={testID} />
    </div>
  );
};

export { BaseIcon };
export type { IconsNames, BaseIconProps };
