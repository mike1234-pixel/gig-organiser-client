import { Container } from "../../common/Container";
import { Trans, withTranslation } from "react-i18next";
import styles from "./Home.module.css";

const HomePage = () => {
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
// export Home as a named export, wrapped in a higher order component - this refreshes the text when translation language is changed but useTranslation is not used
const Home = withTranslation()(HomePage);

export { Home }