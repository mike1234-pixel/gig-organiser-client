import { useTogglePanel } from "../../../context/TogglePanelContext";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../common/Button";
import { EditPanel } from "../../common/EditPanel";
import { EmptyState } from "../../common/EmptyState";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { LoadingState } from "../../common/LoadingState";
import { AddAction } from "../../features/Forms/AddAction/AddAction";
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
        <EditPanel title="Add Action">
          <AddAction />
        </EditPanel>
      ) : (
        <EditPanel title="Update Action">
          {/* to be UpdateAction */}
          <AddAction />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.actionButtonContainer}>
          <Button onClick={handleClick}>Create Action</Button>
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
