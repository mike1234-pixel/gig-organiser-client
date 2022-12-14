import { useMutation } from "react-query";
import { JobNewI } from "../types/Job_New_Object";

const addJob = async (newJob: JobNewI) => {
  const response = await fetch("http://localhost:3002/job", {
    method: "POST",
    body: JSON.stringify(newJob),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not create job");
  }

  return await response.json();
};

export const useAddJob = () => {
  const { mutate, error, isSuccess } = useMutation(addJob);

  return { mutate, error, isSuccess };
};
