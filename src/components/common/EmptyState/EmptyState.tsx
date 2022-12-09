import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import styles from "./EmptyState.module.css";

export const EmptyState = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>No jobs yet.</h1>
      <GiEmptyMetalBucketHandle className={styles.icon} />
      <p>Start adding jobs!</p>
    </div>
  );
};
