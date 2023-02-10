import { ReactNode } from "react";
import styles from "./Container.module.css";

export interface ContainerProps {
  children: ReactNode | ReactNode[];
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles.root} data-testid='container'>{children}</div>;
};
