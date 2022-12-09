import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useAuth } from "../../../../context/AuthContext";
import { useAddJob } from "../../../../hooks/useAddJob";
import { JobNewI } from "../../../../types/Job_New_Object";
import { AddJobForm } from "./AddJobForm";
import { validationSchema } from "./validationSchema";

export const AddJob = () => {
  const { user } = useAuth();

  const { mutate } = useAddJob();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const handleSubmit = (
    job: JobNewI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(job);
    resetForm();
    setTimeout(() => {
      setTogglePanel(!togglePanel);
    }, 200);
  };

  const initialValues: JobNewI = {
    userid: user!.id,
    description: "",
    organisation: "",
    priority: 0,
    status: "",
    title: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <AddJobForm />
    </Formik>
  );
};
