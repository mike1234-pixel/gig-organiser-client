import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useAuth } from "../../../../context/AuthContext";
import { useAddJob } from "../../../../hooks/useAddJob";
import { JobNewI } from "../../../../types/Job_New_Object";
import { validationSchema } from "./validationSchema";
import { JobForm } from "../Job";

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
    userid: user!.ID,
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
      <JobForm buttonText={"Add Job"} />
    </Formik>
  );
};
