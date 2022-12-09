import { useAuth } from "../../../context/AuthContext";
import { EditPanel } from "../../common/EditPanel";
import { useTogglePanel } from "../../../context/TogglePanelContext";
import { AddJob } from "../../features/Forms/AddJob";
import { Button } from "../../common/Button";
import { JobsTable } from "../../features/Tables/JobsTable/JobsTable";
import { LayoutPage } from "../../common/LayoutPage";
import { UpdateJob } from "../../features/Forms/UpdateJob";
import { Home } from "../Home";
import { useJobs } from "../../../hooks/useJobs";
import styles from "./Dashboard.module.css";
import { EmptyState } from "../../common/EmptyState";
import { LoadingState } from "../../common/LoadingState";
import { ErrorState } from "../../common/ErrorState";

export const Dashboard = () => {
  const { isLoggedIn } = useAuth();

  const { jobs, isLoading, error } = useJobs();

  const { addJob, setAddJob, togglePanel, setTogglePanel } = useTogglePanel();

  const handleClick = () => {
    setAddJob(true);
    setTogglePanel(!togglePanel);
  };

  if (!isLoggedIn) return <Home />;

  if (isLoading)
    return (
      <LayoutPage>
        <LoadingState title="Loading..." text="just a second..." />
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text={error.message} />
      </LayoutPage>
    );

  return (
    <>
      {addJob ? (
        <EditPanel title="Add Job">
          <AddJob />
        </EditPanel>
      ) : (
        <EditPanel title="Update Job">
          <UpdateJob />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.actionButtonContainer}>
          <Button onClick={handleClick}>Add job</Button>
        </div>
        {jobs?.length ? (
          <JobsTable />
        ) : (
          <EmptyState title="No jobs yet." text="Start adding jobs!" />
        )}
      </LayoutPage>
    </>
  );
};
