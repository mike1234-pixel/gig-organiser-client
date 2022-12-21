import { useMutation } from "react-query";
import { ActionI } from "../types/Action_Object";
import { useActions } from "./useActions";

const deleteAction = async (action: ActionI) => {
  const response = await fetch(
    `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/actions/${action.ID}`,
    {
      method: "DELETE",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 204) {
    throw new Error("Could not delete actions");
  }

  return response;
};

export const useDeleteAction = () => {
  const { refetchActions } = useActions();

  const { mutate, error, isSuccess } = useMutation(deleteAction, {
    onSuccess: refetchActions,
  });

  return { mutate, error, isSuccess };
};
