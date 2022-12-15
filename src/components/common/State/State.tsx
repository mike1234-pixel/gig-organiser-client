import { BiCommentError } from "react-icons/bi";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { LoadingSpinner } from "../LoadingSpinner";
import styles from "./State.module.css";

interface StateProps {
  title: string;
  text: string;
  type: "loading" | "welcome" | "empty" | "error";
}

const LoadingContent = () => {
  return <LoadingSpinner />;
};

const WelcomeContent = () => {
  return (
    <Link to="/">
      <Button>
        Go to dashboard <MdOutlineDashboardCustomize />
      </Button>
    </Link>
  );
};

const ErrorContent = () => {
  return <BiCommentError className={styles.icon} />;
};

const EmptyContent = () => {
  return <GiEmptyMetalBucketHandle className={styles.icon} />;
};

export const State = ({ title, text, type }: StateProps) => {
  const Content = () => {
    switch (type) {
      case "loading":
        return <LoadingContent />;
      case "welcome":
        return <WelcomeContent />;
      case "error":
        return <ErrorContent />;
      case "empty":
        return <EmptyContent />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <Content />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
