import { Chart } from "react-google-charts";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useJobs } from "../../../../hooks/useJobs";
import { State } from "../../../common/State";
import styles from "./JobStatusChart.module.css";

export const JobStatusChart = () => {
  const { jobs, isLoading, error } = useJobs();

  const { t } = useTranslation();

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

  const statuses: { [key: string]: number } = {
    pending: 0,
    success: 0,
    declined: 0,
  };
  jobs?.forEach((job) => {
    statuses[job.status]++;
  });

  const data = [
    ["Status", "Number of Jobs"],
    ["Pending", statuses.pending],
    ["Success", statuses.success],
    ["Declined", statuses.declined],
  ];

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{t("jobStatusChart.title")}</h2>
      {jobs?.length ? (
        <Chart
          chartType="PieChart"
          data={data}
          options={{
            colors: ["#ffe387", "#57d775", "#f88b88"],
            fontName: "Montserrat",
            fontSize: 14,
            is3D: true,
          }}
        />
      ) : (
        <p>
          {t("jobStatusChart.text")}
          <Link to="/jobs" className={styles.link}>
            {t("jobStatusChart.linkText")}
          </Link>
        </p>
      )}
    </div>
  );
};
