import { LoadingSpinner } from "../LoadingSpinner";
import styles from "./LoadingState.module.css";

interface LoadingStateProps {
  title: string;
  text: string;
}

export const LoadingState = ({ title, text }: LoadingStateProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <LoadingSpinner />
      <p>{text}</p>
    </div>
  );
};
