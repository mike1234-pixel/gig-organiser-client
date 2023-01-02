import { Container } from "../../common/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className={styles.root}>
      <Container>
        <p>{`Michael Tandy ${thisYear}`}</p>
      </Container>
    </div>
  );
};
