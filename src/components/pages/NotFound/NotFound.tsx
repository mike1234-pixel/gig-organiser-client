import { LayoutPage } from "../../common/LayoutPage";
import { BsQuestionLg } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import styles from "./NotFound.module.css";

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <LayoutPage>
      <h1 className={styles.title}>{t("notfound.title")}</h1>
      <p>{t("notfound.text")}</p>
      <BsQuestionLg className={styles.icon} />
    </LayoutPage>
  );
};
