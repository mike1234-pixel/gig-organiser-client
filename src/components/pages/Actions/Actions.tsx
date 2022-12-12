import { MdAddTask } from "react-icons/md";
import { useTogglePanel } from "../../../context/TogglePanelContext";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../common/Button";
import { EditPanel } from "../../common/EditPanel";
import { EmptyState } from "../../common/EmptyState";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { LoadingState } from "../../common/LoadingState";
import { AddAction } from "../../features/Forms/AddAction/AddAction";
import { UpdateAction } from "../../features/Forms/UpdateAction/UpdateAction";
import { ActionsTable } from "../../features/Tables/ActionsTable";
import styles from "./Actions.module.css";

export const Actions = () => {
  const { actions, isLoading, error } = useActions();

  const { form, setForm, togglePanel, setTogglePanel } = useTogglePanel();

  const handleClick = () => {
    setForm("AddAction");
    setTogglePanel(!togglePanel);
  };

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
      {form === "AddAction" ? (
        <EditPanel title="Create Action">
          <AddAction />
        </EditPanel>
      ) : (
        <EditPanel title="Update Action">
          <UpdateAction />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <p>
              Jobs have <strong>actions</strong>, which are the specific steps
              you need to take in order to move forward with the application.
              These actions can be added here, and might include things like
              scheduling an interview or completing a technical test.
            </p>
          </div>
          <Button onClick={handleClick} style={{ marginTop: 0 }}>
            Create Action <MdAddTask />
          </Button>
        </div>
        {actions?.length ? (
          <ActionsTable />
        ) : (
          <EmptyState title="No actions yet." text="Start adding actions!" />
        )}
      </LayoutPage>
    </>
  );
};
