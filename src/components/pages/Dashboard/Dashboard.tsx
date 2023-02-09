import { Trans, withTranslation } from "react-i18next";
import { useAuth } from "../../../context/AuthContext";
import { LayoutPage } from "../../common/LayoutPage";
import { ApplicationsThisMonth } from "../../features/Dashboard/ApplicationsThisMonth";
import { JobStatusChart } from "../../features/Dashboard/JobStatusChart";
import { TopJobs } from "../../features/Dashboard/TopJobs";
import { UpcomingActions } from "../../features/Dashboard/UpcomingActions";
import { Home } from "../Home";
import styles from "./Dashboard.module.css";

export const DashboardPage = () => {
  const { user } = useAuth();

  if (!user) return <Home />;

  return (
    <LayoutPage>
      <div className={styles.info}>
        <Trans i18nKey="dashboard.intro" />
      </div>
      <div className={styles.grid}>
        <UpcomingActions />
        <JobStatusChart />
        <ApplicationsThisMonth />
        <TopJobs />
      </div>
    </LayoutPage>
  );
};

const Dashboard = withTranslation()(DashboardPage);

export { Dashboard }
