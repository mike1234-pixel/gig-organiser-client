import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useUpdateJob } from "../../../../hooks/useUpdateJob";
import { JobI } from "../../../../types/Job_Object";
import { useJobToUpdate } from "../../../../context/UpdateJobContext";
import { useTranslation } from "react-i18next";
import { JobForm } from "../Job";
import { useJobs } from "../../../../hooks/useJobs";

export const UpdateJob = () => {
  const { mutate } = useUpdateJob();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const { jobToUpdate } = useJobToUpdate();

  const { refetchJobs } = useJobs();

  const { t } = useTranslation();

  const handleSubmit = (
    job: JobI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(job);
    setTimeout(
      () => {
        setTogglePanel(!togglePanel);
        refetchJobs();
      },
      200,
      () => {
        resetForm();
      }
    );
  };

  const {
    CreatedAt,
    DeletedAt,
    ID,
    UpdatedAt,
    userid,
    description,
    organisation,
    priority,
    status,
    title,
  } = jobToUpdate;

  const initialValues: JobI = {
    CreatedAt,
    DeletedAt,
    ID,
    UpdatedAt,
    userid,
    description: description.replace(/(<([^>]+)>)/gi, ""),
    organisation,
    priority,
    status,
    title,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <JobForm buttonText={t("jobs.updateAlt")} />
    </Formik>
  );
};
