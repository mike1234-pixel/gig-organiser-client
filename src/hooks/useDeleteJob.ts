import { useMutation } from "react-query";
import { JobI } from "../types/Job_Object";

const deleteJob = async (job: JobI) => {
  const response = await fetch(`http://localhost:3002/jobs/${job.ID}`, {
    method: "DELETE",
    body: JSON.stringify(job),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not delete job");
  }

  return await response.json();
};

export const useDeleteJob = () => {
  const { mutate, error, isSuccess } = useMutation<unknown, Error, JobI>(
    deleteJob
  );

  return { mutate, error, isSuccess };
};
