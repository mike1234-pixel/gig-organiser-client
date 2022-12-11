import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useUpdateJob } from "../../../../hooks/useUpdateJob";
import { JobI } from "../../../../types/Job_Object";
import { useJobToUpdate } from "../../../../context/UpdateJobContext";
import { JobForm } from "../Job";

export const UpdateJob = () => {
  const { mutate } = useUpdateJob();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const { jobToUpdate } = useJobToUpdate();

  const handleSubmit = (
    job: JobI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(job);
    setTimeout(
      () => {
        setTogglePanel(!togglePanel);
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
    CreatedAt: CreatedAt,
    DeletedAt: DeletedAt,
    ID: ID,
    UpdatedAt: UpdatedAt,
    userid: userid,
    description: description,
    organisation: organisation,
    priority: priority,
    status: status,
    title: title,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <JobForm buttonText={"Update"} />
    </Formik>
  );
};
