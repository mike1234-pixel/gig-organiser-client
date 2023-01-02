import { Container } from "../../common/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <div className={styles.root}>
      <Container>
        <p>
          <a href="https://github.com/mike1234-pixel" target="_blank">
            {`Michael Tandy`}
          </a>
          <span>{thisYear}</span>
        </p>
      </Container>
    </div>
  );
};
