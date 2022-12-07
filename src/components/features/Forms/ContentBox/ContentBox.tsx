import { ReactNode } from "react";
import styles from "./ContentBox.module.css";

interface ContentBoxProps {
  children?: ReactNode | ReactNode[];
  title?: string;
}

export const ContentBox = ({ children, title }: ContentBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {title && <h1 className={styles.title}>{title}</h1>}
        {children}
      </div>
    </div>
  );
};
