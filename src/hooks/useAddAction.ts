import { useMutation } from "react-query";
import { ActionNewI } from "../types/Action_New_Object";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useActions } from "./useActions";

const addAction = async (newAction: ActionNewI) => {
  const parsedDescription = DOMPurify.sanitize(marked(newAction.description));

  newAction.description = parsedDescription;

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
  const { refetchActions } = useActions();

  const { mutate, error, isSuccess } = useMutation(addAction, {
    onSuccess: refetchActions,
  });

  return { mutate, error, isSuccess };
};
