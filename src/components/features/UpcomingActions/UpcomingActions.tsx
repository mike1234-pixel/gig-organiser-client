import moment from "moment";
import { State } from "../../common/State";
import { useActions } from "../../../hooks/useActions";
import { retrieveUpcomingActions } from "../../../utils/retrieveUpcomingActions";
import { Link } from "react-router-dom";
import { BiTimer } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import styles from "./UpcomingActions.module.css";

export const UpcomingActions = () => {
  const { actions, isLoading, error } = useActions();

  const currentDate = moment();

  const { t } = useTranslation();

  if (isLoading)
    return <State type="loading" title="Loading" text="sit tight..." />;

  if (error)
    return <State type="error" title="Error" text="No actions found." />;

  const upcomingActions = actions
    ? retrieveUpcomingActions(actions, currentDate)
    : [];

  return (
    <div className={styles.root}>
      {upcomingActions.length ? (
        <>
          <h2 className={styles.title}>{t("upcomingActions.title")}</h2>
          <ul className={styles.list}>
            {upcomingActions.map((action) => {
              const formattedDate = moment(action.complete_by).format("LLL");
              return (
                <li key={action.ID} className={styles.listItem}>
                  <BiTimer />
                  <Link className={styles.link} to="/actions">
                    {action.name} - <span>{formattedDate}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <div>
          <h2 className={styles.title}>{t("upcomingActions.empty.title")}</h2>
          <p>
            {t("upcomingActions.empty.text")}
            <Link to="/actions" className={styles.link}>
              {t("upcomingActions.empty.linkText")}
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};
