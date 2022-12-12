import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import styles from "./WelcomeState.module.css";

interface WelcomeStateProps {
  title: string;
  text: string;
}

export const WelcomeState = ({ title, text }: WelcomeStateProps) => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <Link to="/">
        <Button>
          Go to dashboard <MdOutlineDashboardCustomize />
        </Button>
      </Link>
      <p>{text}</p>
    </div>
  );
};
