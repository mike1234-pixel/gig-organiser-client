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
import { EmptyState } from "../../common/EmptyState";
import { LoadingState } from "../../common/LoadingState";
import { ErrorState } from "../../common/ErrorState";
import { Link } from "react-router-dom";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import styles from "./Jobs.module.css";

export const Jobs = () => {
  const { user } = useAuth();

  const { jobs, isLoading, error } = useJobs();

  const { form, setForm, togglePanel, setTogglePanel } = useTogglePanel();

  const handleClick = () => {
    setForm("AddJob");
    setTogglePanel(!togglePanel);
  };

  if (!user) return <Home />;

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
      {form === "AddJob" ? (
        <EditPanel title="Add Job">
          <AddJob />
        </EditPanel>
      ) : (
        <EditPanel title="Update Job">
          <UpdateJob />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <p>
              In your job search, it's important to keep track of the positions
              you're applying for and the progress you're making with each one.
              Here you can add a job, including its title, description,
              priority, and status. The <strong>title</strong> is the name of
              the position you're applying for, the <strong>description</strong>{" "}
              provides more details about the job, the <strong>priority</strong>{" "}
              indicates how important it is to you, and the{" "}
              <strong>status</strong> shows where you are in the application
              process.
            </p>
            <p>
              Jobs also have <strong>actions</strong>, which are the specific
              steps you need to take in order to move forward with the
              application. These actions can be added on the{" "}
              <Link to="/actions" className={styles.pageLink}>
                actions
              </Link>{" "}
              page, and might include things like scheduling an interview or
              completing a technical test.
            </p>
          </div>
          <Button onClick={handleClick} style={{ marginTop: 0 }}>
            Add Job <MdOutlineCreateNewFolder />
          </Button>
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
