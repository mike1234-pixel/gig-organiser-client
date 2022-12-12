import classNames from "classnames";
import { CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  variant?: "success" | "danger" | "warning" | "action";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: CSSProperties | undefined;
}

export const Button = ({
  children,
  variant = "action",
  disabled,
  type,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={classNames(styles.button, styles[variant!])}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
