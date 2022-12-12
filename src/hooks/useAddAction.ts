import { useMutation } from "react-query";
import { ActionNewI } from "../types/Action_New_Object";

const addAction = async (newAction: any) => {
  newAction.jobid = parseInt(newAction.jobid);
  const response = await fetch("http://localhost:3002/action", {
    method: "POST",
    body: JSON.stringify(newAction),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not create action");
  }

  return await response.json();
};

export const useAddAction = () => {
  const { mutate, error, isSuccess } = useMutation<unknown, Error, ActionNewI>(
    addAction
  );

  return { mutate, error, isSuccess };
};
