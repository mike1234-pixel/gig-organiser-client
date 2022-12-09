import { BiCommentError } from "react-icons/bi";
import styles from "./ErrorState.module.css";

interface ErrorStateProps {
  title: string;
  text: string;
}

export const ErrorState = ({ title, text }: ErrorStateProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <BiCommentError className={styles.icon} />
      <p>{text}</p>
    </div>
  );
};
