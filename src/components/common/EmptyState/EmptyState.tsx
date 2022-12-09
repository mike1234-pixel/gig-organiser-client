import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  text: string;
}

export const EmptyState = ({ title, text }: EmptyStateProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <GiEmptyMetalBucketHandle className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};
