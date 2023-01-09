import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { MdOutlineWorkOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useJobs } from "../../../../hooks/useJobs";
import { JobI } from "../../../../types/Job_Object";
import { State } from "../../../common/State";
import styles from "./TopJobs.module.css";

const getRecentJobsWithHighPriority = (jobs: JobI[]): JobI[] => {
  const sortedJobs = jobs.sort((a, b) => {
    const aDate = new Date(a.UpdatedAt);
    const bDate = new Date(b.UpdatedAt);
    return bDate.getTime() - aDate.getTime();
  });

  const filteredJobs = sortedJobs.filter((job) => job.priority >= 8);

  return filteredJobs.slice(0, 3);
};

export const TopJobs = () => {
  const { jobs, isLoading, error } = useJobs();

  const { t } = useTranslation();

  const highPriorityJobs = jobs ? getRecentJobsWithHighPriority(jobs) : [];

  if (isLoading)
    return (
      <State
        type="loading"
        title="Loading"
        text="Nearly there..."
        dashboardPanel
      />
    );

  if (error)
    return (
      <State
        type="error"
        title="Error"
        text="Could not find jobs."
        dashboardPanel
      />
    );

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{t("topJobs.title")}</h2>
      <h3 className={styles.subtitle}>{t("topJobs.subtitle")}</h3>
      <ul>
        <>
          {highPriorityJobs.length ? (
            highPriorityJobs.map((job) => {
              return (
                <li key={job.ID} className={styles.listItem}>
                  <MdOutlineWorkOutline />
                  <Link to="/jobs" className={styles.link}>
                    {job.title}
                  </Link>
                </li>
              );
            })
          ) : (
            <p>{t("topJobs.empty")}</p>
          )}
        </>
      </ul>
      <Link className={classNames(styles.link, styles.mainLink)} to="/jobs">
        {t("topJobs.viewAll")}
      </Link>
    </div>
  );
};
