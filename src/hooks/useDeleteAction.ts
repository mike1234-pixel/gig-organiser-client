import { useMutation } from "react-query";
import { ActionI } from "../types/Action_Object";

const deleteAction = async (action: ActionI) => {
  const response = await fetch(`http://localhost:3002/actions/${action.ID}`, {
    method: "DELETE",
    body: JSON.stringify(action),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not delete actions");
  }

  return await response.json();
};

export const useDeleteAction = () => {
  const { mutate, error, isSuccess } = useMutation<unknown, Error, ActionI>(
    deleteAction
  );

  return { mutate, error, isSuccess };
};
