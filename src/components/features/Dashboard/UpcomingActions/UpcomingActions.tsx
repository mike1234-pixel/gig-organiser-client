import moment, { Moment } from "moment";
import { State } from "../../../common/State";
import { useActions } from "../../../../hooks/useActions";
import { Link } from "react-router-dom";
import { BiTimer } from "react-icons/bi";
import { useTranslation } from "react-i18next";
import { ActionI } from "../../../../types/Action_Object";
import classNames from "classnames";
import styles from "./UpcomingActions.module.css";

const getUpcomingActions = (actions: ActionI[], currentDate: Moment) => {
  return actions
    .filter((a) => !a.completed)
    .filter((a) => moment(a.complete_by).isAfter(currentDate))
    .sort((a, b) => {
      const aDate = moment(a.complete_by);
      const bDate = moment(b.complete_by);
      return aDate.diff(currentDate) - bDate.diff(currentDate);
    })
    .slice(0, 3);
};

export const UpcomingActions = () => {
  const { actions, isLoading, error } = useActions();

  const currentDate = moment();

  const { t } = useTranslation();

  if (isLoading)
    return (
      <State
        type="loading"
        title="Loading"
        text="sit tight..."
        dashboardPanel
      />
    );

  if (error)
    return (
      <State
        type="error"
        title="Error"
        text="No actions found."
        dashboardPanel
      />
    );

  const upcomingActions = actions
    ? getUpcomingActions(actions, currentDate)
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
          <Link
            className={classNames(styles.link, styles.mainLink)}
            to="/actions"
          >
            {t("upcomingActions.viewAll")}
          </Link>
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
