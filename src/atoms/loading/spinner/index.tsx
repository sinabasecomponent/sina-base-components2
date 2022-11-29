import { Colors } from "../../../colors";
import styles from "./spinner.module.scss";

const SMALL_BORDER = 1;
const MEDIUM_BORDER = 2;
const LARGE_BORDER = 3;
const SMALL = 15;
const MEDIUM = 20;
const LARGE = 30;

const Spinner = ({
  spinerColor,
  size,
}: {
  size?: "small" | "medium" | "large";
  spinerColor?: Colors;
}) => {
  const borderStyle = spinerColor
    ? `${spinerColor} transparent transparent transparent`
    : `${Colors.color_primary_1} transparent transparent transparent`;

  const borderWidth =
    size === "small"
      ? SMALL_BORDER
      : size === "medium"
      ? MEDIUM_BORDER
      : size === "large"
      ? LARGE_BORDER
      : MEDIUM_BORDER;

  const width =
    size === "small"
      ? SMALL
      : size === "medium"
      ? MEDIUM
      : size === "large"
      ? LARGE
      : MEDIUM;

  return (
    <div style={{ width: width, height: width }} className={styles["lds-ring"]}>
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: width,
          height: width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: width,
          height: width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: width,
          height: width,
        }}
      />
      <div
        style={{
          borderColor: borderStyle,
          borderWidth: borderWidth,
          width: width,
          height: width,
        }}
      />
    </div>
  );
};

export { Spinner };
