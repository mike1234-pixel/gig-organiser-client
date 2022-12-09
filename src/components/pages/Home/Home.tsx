import { Container } from "../../common/Container";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Organise Your Job Search</h1>
          <h2 className={styles.subtitle}>
            Looking for a job can be a daunting task, but with Gig Organiser,
            you can easily keep track of all your job applications and
            interviews in one place.
          </h2>
          <h2 className={styles.subtitle}>
            Jot down notes and track the progress of each application, so you
            never lose sight of your job search. Say goodbye to cluttered
            notebooks and sticky notes, and{" "}
            <strong>hello to a sleek and organised job hunt!</strong>
          </h2>
        </div>
      </Container>
    </div>
  );
};
