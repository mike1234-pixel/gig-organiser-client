import { useMutation } from "react-query";
import { JobI } from "../types/Job_Object";
import { useJobs } from "./useJobs";

const deleteJob = async (job: JobI) => {
  const response = await fetch(
    `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/jobs/${job.ID}`,
    {
      method: "DELETE",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 204) {
    throw new Error("Could not delete job");
  }

  return response;
};

export const useDeleteJob = () => {
  const { refetchJobs } = useJobs();

  const { mutate, error, isSuccess } = useMutation(deleteJob, {
    onSuccess: refetchJobs,
  });

  return { mutate, error, isSuccess };
};
