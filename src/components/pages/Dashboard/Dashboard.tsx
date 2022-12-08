import { useLoginState } from "../../../context/LoginStateProvider";
import styles from "./Dashboard.module.css";
import { Container } from "../../common/Container";
import { ContentBox } from "../../features/Forms/ContentBox";
import { EditPanel } from "../../common/EditPanel";
import { useTogglePanel } from "../../../context/EditPanel";
import { AddJob } from "../../features/Forms/AddJob";
import { Button } from "../../common/Button";
import { JobsTable } from "../../features/Tables/JobsTable/JobsTable";

export const Dashboard = () => {
  const { isLoggedIn } = useLoginState();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  return isLoggedIn ? (
    <>
      <EditPanel title="Add Job">
        <AddJob />
      </EditPanel>
      <ContentBox>
        <JobsTable />
        <Button onClick={() => setTogglePanel(!togglePanel)}>Add job</Button>
      </ContentBox>
    </>
  ) : (
    <div className={styles.hero}>
      <Container>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Organise Your Job Search</h1>
        </div>
      </Container>
    </div>
  );
};
