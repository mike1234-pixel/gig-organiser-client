import classNames from "classnames";
import { ReactNode } from "react";
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
