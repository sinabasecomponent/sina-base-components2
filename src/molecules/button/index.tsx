import classNames from "classnames";
import _ from "lodash";
import { FC, useMemo, useState } from "react";
import { Loading } from "../../atoms/loading";
import { Text } from "../../atoms/text";
import { Colors } from "../../colors";
import styles from "./button.module.scss";

type Ripple = {
  top: string;
  left: string;
  height: string;
  width: string;
  id: number;
};
export interface ButtonProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "type" | "children"> {
  type?: "submit" | "button" | "reset";
  mode?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  mode = "primary",
  type = "button",
  className,
  isLoading,
  disabled,
  onClick,
  ...rest
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const showRipple = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (isLoading) return;
    const rippleContainer = e.currentTarget;
    const size = rippleContainer.offsetWidth;
    const pos = rippleContainer.getBoundingClientRect();
    const x = e.pageX - pos.x - size / 2;
    const y = e.pageY - pos.y - size / 2;
    const spanStyles = {
      top: y + "px",
      left: x + "px",
      height: size + "px",
      width: size + "px",
      id: Date.now(),
    };

    setRipples((prev) => {
      return [...prev, spanStyles];
    });
  };

  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onClick?.(e);
  };

  const renderRipple = () => {
    if (ripples.length > 0) {
      return ripples.map(({ id, ...rest }) => {
        return (
          <span style={{ ...rest }} key={id} className={styles["ripple"]} />
        );
      });
    }
  };

  const onDebounce = useMemo(
    () =>
      _.debounce(() => {
        setRipples([]);
      }, 1000),
    [],
  );

  return (
    <button
      {...rest}
      type={type}
      onMouseDown={showRipple}
      onMouseUp={onDebounce}
      onClick={handleOnClick}
      disabled={disabled || isLoading}
      className={classNames(
        styles["button"],
        mode === "primary" && styles["button--primary"],
        mode === "secondary" && styles["button--secondary"],
        className,
      )}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {typeof children !== "object" ? (
          <Text size={16} color={Colors.color_white}>
            {children}
          </Text>
        ) : (
          children
        )}
      </div>
      {isLoading ? (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "53%",
            transform: "translate(-20px,-50%)",
          }}
        >
          <Loading
            isLoading
            spinnerColor={Colors.color_white}
            size={"medium"}
          />
        </div>
      ) : null}
      {(isLoading || disabled) && <div className={styles["cover"]} />}
      {renderRipple()}
    </button>
  );
};
export { Button };
