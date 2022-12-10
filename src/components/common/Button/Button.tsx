import classNames from "classnames";
import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  variant?: "success" | "danger" | "warning" | "action";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "action",
  disabled,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={classNames(styles.button, styles[variant!])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
