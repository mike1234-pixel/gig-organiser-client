import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { useAuth } from "../../../../context/AuthContext";
import { ActionNewI } from "../../../../types/Action_New_Object";
import { useAddAction } from "../../../../hooks/useAddAction";
import { validationSchema } from "./validationSchema";
import { ActionForm } from "../Action";

export const AddAction = () => {
  const { user } = useAuth();

  const { mutate } = useAddAction();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const handleSubmit = (
    action: ActionNewI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(action);
    resetForm();
    setTimeout(() => {
      setTogglePanel(!togglePanel);
    }, 200);
  };

  const initialValues: ActionNewI = {
    userid: user!.ID,
    jobid: 0,
    name: "",
    description: "",
    complete_by: "",
    completed: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <ActionForm buttonText={"Create Action"} />
    </Formik>
  );
};
