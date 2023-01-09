import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useJobs } from "../../../../hooks/useJobs";
import { JobI } from "../../../../types/Job_Object";
import { State } from "../../../common/State";
import styles from "./ApplicationsThisMonth.module.css";

const getJobsThisMonth = (jobs: JobI[]): JobI[] => {
  const today = new Date();
  const currentMonth = today.getMonth();

  return jobs.filter((job) => {
    const createdAt = new Date(job.CreatedAt);
    return createdAt.getMonth() === currentMonth;
  });
};

export const ApplicationsThisMonth = () => {
  const { t } = useTranslation();

  const { jobs, isLoading, error } = useJobs();

  const jobsThisMonth = jobs ? getJobsThisMonth(jobs) : [];

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
      <h2 className={styles.title}>{t("applicationsThisMonth.title")}</h2>
      <div className={styles.count}>
        <Link className={styles.link} to="/jobs">
          {jobsThisMonth.length}
        </Link>
      </div>
    </div>
  );
};
