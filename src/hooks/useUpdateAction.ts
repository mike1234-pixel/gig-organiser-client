import { useMutation } from "react-query";
import { ActionI } from "../types/Action_Object";

const updateAction = async (action: any) => {
  // formik casts job id as a string so i'm accepting any here and transforming the value prior to post
  action.jobid = parseInt(action.jobid);
  const response = await fetch(`http://localhost:3002/actions/${action.ID}`, {
    method: "PUT",
    body: JSON.stringify(action),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not update action");
  }

  return await response.json();
};

export const useUpdateAction = () => {
  const { mutate, error, isSuccess } = useMutation<unknown, Error, ActionI>(
    updateAction
  );

  return { mutate, error, isSuccess };
};
