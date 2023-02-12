import { BiCommentError } from "react-icons/bi";
import { GiEmptyMetalBucketHandle } from "react-icons/gi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { LoadingSpinner } from "../LoadingSpinner";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import styles from "./State.module.css";

interface StateProps {
  title: string;
  text: string;
  type: "loading" | "welcome" | "empty" | "error";
  dashboardPanel?: boolean;
}

const LoadingContent = () => {
  return <LoadingSpinner />;
};

const WelcomeContent = () => {
  const { t } = useTranslation();

  return (
    <Link to="/">
      <Button>
        {t("welcome.dashboard")} <MdOutlineDashboardCustomize data-testid='dashboard-icon' />
      </Button>
    </Link>
  );
};

const ErrorContent = () => {
  return <BiCommentError className={styles.icon} data-testid='error-icon' />;
};

const EmptyContent = () => {
  return <GiEmptyMetalBucketHandle className={styles.icon} data-testid='empty-icon' />;
};

export const State = ({ title, text, type, dashboardPanel }: StateProps) => {
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
    <div
      className={
        dashboardPanel
          ? classNames(styles.root, styles.dashboardPanel)
          : styles.root
      }
    >
      <h1 className={styles.title}>{title}</h1>
      <Content />
      <p className={styles.text}>{text}</p>
    </div>
  );
};
