import { useAuth } from "../../../context/AuthContext";
import { LayoutPage } from "../../common/LayoutPage";
import { UpcomingActions } from "../../features/UpcomingActions";
import { Home } from "../Home";
import styles from "./Dashboard.module.css";

export const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return <Home />;

  return (
    <LayoutPage>
      <div className={styles.root}>
        <UpcomingActions />
      </div>
    </LayoutPage>
  );
};
