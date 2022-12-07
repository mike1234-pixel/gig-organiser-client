import { Jobs } from "../../features/Jobs";
import organise from "./organise.jpg";
import { useLoginState } from "../../../context/LoginStateProvider";
import styles from "./Dashboard.module.css";
import { Container } from "../../common/Container";
import { ContentBox } from "../../features/Forms/ContentBox";

export const Dashboard = () => {
  const { isLoggedIn } = useLoginState();

  return isLoggedIn ? (
    <ContentBox>
      <Jobs />
    </ContentBox>
  ) : (
    <div className={styles.hero}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Organise Your Job Search</h1>
        </div>
      </Container>
    </div>
  );
};
