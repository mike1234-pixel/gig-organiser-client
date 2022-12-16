import { useMutation } from "react-query";
import { ActionNewI } from "../types/Action_New_Object";

const addAction = async (newAction: ActionNewI) => {
  newAction.jobid = parseInt(newAction.jobid as unknown as string);
  const response = await fetch(
    "https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/action",
    {
      method: "POST",
      body: JSON.stringify(newAction),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Could not create action");
  }

  return await response.json();
};

export const useAddAction = () => {
  const { mutate, error, isSuccess } = useMutation(addAction);

  return { mutate, error, isSuccess };
};
