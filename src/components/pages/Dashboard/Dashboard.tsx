import { useLoginState } from "../../../context/LoginStateProvider";
import styles from "./Dashboard.module.css";
import { EditPanel } from "../../common/EditPanel";
import { useTogglePanel } from "../../../context/EditPanel";
import { AddJob } from "../../features/Forms/AddJob";
import { Button } from "../../common/Button";
import { JobsTable } from "../../features/Tables/JobsTable/JobsTable";
import { LayoutPage } from "../../common/LayoutPage";
import { UpdateJob } from "../../features/Forms/UpdateJob";
import { Home } from "../Home";

export const Dashboard = () => {
  const { isLoggedIn } = useLoginState();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  return isLoggedIn ? (
    <>
      <EditPanel title="Add Job">
        <AddJob />
      </EditPanel>

      {/* <EditPanel title="Update Job">
        <UpdateJob />
      </EditPanel> */}

      <LayoutPage>
        <div className={styles.actionButtonContainer}>
          <Button onClick={() => setTogglePanel(!togglePanel)}>Add job</Button>
        </div>
        <JobsTable />
      </LayoutPage>
    </>
  ) : (
    <Home />
  );
};
