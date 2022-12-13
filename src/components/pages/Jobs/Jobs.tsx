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
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { Trans, useTranslation } from "react-i18next";
import styles from "./Jobs.module.css";

export const Jobs = () => {
  const { user } = useAuth();

  const { jobs, isLoading, error } = useJobs();

  const { form, setForm, togglePanel, setTogglePanel } = useTogglePanel();

  const { t } = useTranslation();

  const handleClick = () => {
    setForm("AddJob");
    setTogglePanel(!togglePanel);
  };

  if (!user) return <Home />;

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
      {form === "AddJob" ? (
        <EditPanel title={t("jobs.add")}>
          <AddJob />
        </EditPanel>
      ) : (
        <EditPanel title={t("jobs.update")}>
          <UpdateJob />
        </EditPanel>
      )}

      <LayoutPage>
        <div className={styles.summaryContainer}>
          <div className={styles.summary}>
            <p>
              <Trans i18nKey="jobs.intro.one" />
            </p>
            <p>
              <Trans i18nKey="jobs.intro.two" />
            </p>
          </div>
          <Button onClick={handleClick} style={{ marginTop: 0 }}>
            {t("jobs.add")} <MdOutlineCreateNewFolder />
          </Button>
        </div>
        {jobs?.length ? (
          <JobsTable />
        ) : (
          <EmptyState
            title={t("jobs.empty.title")}
            text={t("jobs.empty.text")}
          />
        )}
      </LayoutPage>
    </>
  );
};
