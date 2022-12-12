import { LayoutPage } from "../../common/LayoutPage";
import { BsQuestionLg } from "react-icons/bs";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <LayoutPage>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <BsQuestionLg className={styles.icon} />
    </LayoutPage>
  );
};
