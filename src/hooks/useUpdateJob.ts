import { useMutation } from "react-query";
import { JobI } from "../types/Job_Object";

const updateJob = async (job: JobI) => {
  const response = await fetch(`http://localhost:3002/jobs/${job.ID}`, {
    method: "PUT",
    body: JSON.stringify(job),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not update job");
  }

  return await response.json();
};

export const useUpdateJob = () => {
  const { mutate, error, isSuccess } = useMutation<unknown, Error, JobI>(
    updateJob
  );

  return { mutate, error, isSuccess };
};
