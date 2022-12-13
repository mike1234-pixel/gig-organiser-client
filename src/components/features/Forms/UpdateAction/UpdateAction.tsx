import { Formik } from "formik";
import { useTogglePanel } from "../../../../context/TogglePanelContext";
import { ActionForm } from "../Action";
import { ActionI } from "../../../../types/Action_Object";
import { useActionToUpdate } from "../../../../context/UpdateActionContext";
import { useUpdateAction } from "../../../../hooks/useUpdateAction";
import { useTranslation } from "react-i18next";

export const UpdateAction = () => {
  const { mutate } = useUpdateAction();

  const { togglePanel, setTogglePanel } = useTogglePanel();

  const { actionToUpdate } = useActionToUpdate();

  const { t } = useTranslation();

  const handleSubmit = (
    action: ActionI,
    { resetForm }: { resetForm: () => void }
  ) => {
    mutate(action);
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
    ID,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    userid,
    jobid,
    name,
    description,
    complete_by,
    completed,
  } = actionToUpdate;

  const initialValues: ActionI = {
    ID,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    userid,
    jobid,
    name,
    description,
    complete_by,
    completed,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      <ActionForm buttonText={t("actions.updateAlt")} />
    </Formik>
  );
};
