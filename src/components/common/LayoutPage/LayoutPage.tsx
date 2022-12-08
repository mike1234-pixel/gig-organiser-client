import { ReactNode } from "react";
import { Container } from "../Container";
import styles from "./LayoutPage.module.css";

interface LayoutPageProps {
  children: ReactNode | ReactNode[];
}

export const LayoutPage = ({ children }: LayoutPageProps) => {
  return (
    <div className={styles.root}>
      <Container>{children}</Container>
    </div>
  );
};
