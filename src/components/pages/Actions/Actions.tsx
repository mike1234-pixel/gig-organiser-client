import { MdAddTask } from "react-icons/md";
import { useTogglePanel } from "../../../context/TogglePanelContext";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../common/Button";
import { EditPanel } from "../../common/EditPanel";
import { EmptyState } from "../../common/EmptyState";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { LoadingState } from "../../common/LoadingState";
import { AddAction } from "../../features/Forms/AddAction";
import { UpdateAction } from "../../features/Forms/UpdateAction";
import { ActionsTable } from "../../features/Tables/ActionsTable";
import { Trans, useTranslation } from "react-i18next";
import styles from "./Actions.module.css";

export const Actions = () => {
  const { actions, isLoading, error } = useActions();

  const { form, setForm, togglePanel, setTogglePanel } = useTogglePanel();

  const { t } = useTranslation();

  const handleClick = () => {
    setForm("AddAction");
    setTogglePanel(!togglePanel);
  };

  if (isLoading)
    return (
      <LayoutPage>
        <LoadingState title={t("loading.title")} text={t("loading.text")} />
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title={t("error.title")} text={error.message} />
      </LayoutPage>
    );

  return (
    <>
      {form === "AddAction" ? (
        <EditPanel title={t("actions.add")}>
          <AddAction />
        </EditPanel>
      ) : (
        <EditPanel title={t("actions.update")}>
          <UpdateAction />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <p>
              <Trans i18nKey="actions.intro" />
            </p>
          </div>
          <Button onClick={handleClick} style={{ marginTop: 0 }}>
            {t("actions.add")} <MdAddTask />
          </Button>
        </div>
        {actions?.length ? (
          <ActionsTable />
        ) : (
          <EmptyState
            title={t("actions.empty.title")}
            text={t("actions.empty.text")}
          />
        )}
      </LayoutPage>
    </>
  );
};
