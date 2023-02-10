import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./Badge.module.css";

export interface BadgeProps {
  children: ReactNode | ReactNode[];
  variant?: "warning" | "success" | "danger";
}

export const Badge = ({ children, variant }: BadgeProps) => {
  return (
    <div className={classNames(styles.root, variant && styles[variant])}>
      {children}
    </div>
  );
};
