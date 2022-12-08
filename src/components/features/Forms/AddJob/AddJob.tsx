import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/EditPanel";
import { useLoginState } from "../../../../context/LoginStateProvider";
import { useAddJob } from "../../../../hooks/useAddJob";
import { JobNewI } from "../../../../types/Job_New_Object";
import { AddJobForm } from "./AddJobForm";
import { validationSchema } from "./validationSchema";

export const AddJob = () => {
  const { user } = useLoginState();

  const { mutate } = useAddJob();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const handleSubmit = (
    values: JobNewI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(values);
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
