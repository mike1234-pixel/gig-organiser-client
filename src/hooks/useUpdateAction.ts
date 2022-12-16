import { useMutation } from "react-query";
import { ActionI } from "../types/Action_Object";

const updateAction = async (action: ActionI) => {
  action.jobid = parseInt(action.jobid as unknown as string);
  const response = await fetch(
    `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/actions/${action.ID}`,
    {
      method: "PUT",
      body: JSON.stringify(action),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Could not update action");
  }

  return await response.json();
};

export const useUpdateAction = () => {
  const { mutate, error, isSuccess } = useMutation(updateAction);

  return { mutate, error, isSuccess };
};
