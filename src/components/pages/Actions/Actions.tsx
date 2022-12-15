import { MdAddTask } from "react-icons/md";
import { useTogglePanel } from "../../../context/TogglePanelContext";
import { useActions } from "../../../hooks/useActions";
import { Button } from "../../common/Button";
import { EditPanel } from "../../common/EditPanel";
import { LayoutPage } from "../../common/LayoutPage";
import { State } from "../../common/State";
import { AddAction } from "../../features/Forms/AddAction";
import { UpdateAction } from "../../features/Forms/UpdateAction";
import { ActionsTable } from "../../features/Tables/ActionsTable";
import { Trans, useTranslation } from "react-i18next";
import { useAuth } from "../../../context/AuthContext";
import styles from "./Actions.module.css";

export const Actions = () => {
  const { actions, isLoading, error } = useActions();

  const { form, setForm, togglePanel, setTogglePanel } = useTogglePanel();

  const { user } = useAuth();

  const { t } = useTranslation();

  const handleClick = () => {
    setForm("AddAction");
    setTogglePanel(!togglePanel);
  };

  if (!user) {
    return (
      <LayoutPage>
        <State
          type="error"
          title={t("actions.error.title")}
          text={t("actions.error.text")}
        />
      </LayoutPage>
    );
  }

  if (isLoading)
    return (
      <LayoutPage>
        <State
          type="loading"
          title={t("loading.title")}
          text={t("loading.text")}
        />
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <State type="error" title={t("error.title")} text={error.message} />
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
          <State
            type="empty"
            title={t("actions.empty.title")}
            text={t("actions.empty.text")}
          />
        )}
      </LayoutPage>
    </>
  );
};
