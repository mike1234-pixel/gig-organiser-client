import { Container } from "../../common/Container";
import { Trans } from "react-i18next";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>
            <Trans i18nKey="home.title" />
          </h1>
          <h2 className={styles.subtitle}>
            <Trans i18nKey="home.subtitle.one" />
          </h2>
          <h2 className={styles.subtitle}>
            <Trans i18nKey="home.subtitle.two" />
          </h2>
        </div>
      </Container>
    </div>
  );
};
