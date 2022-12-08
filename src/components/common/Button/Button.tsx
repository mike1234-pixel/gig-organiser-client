import { ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  variant?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  children,
  variant,
  disabled,
  type,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
