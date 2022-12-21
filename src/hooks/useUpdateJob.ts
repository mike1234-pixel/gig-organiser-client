import { useMutation } from "react-query";
import { JobI } from "../types/Job_Object";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { useJobs } from "./useJobs";

const updateJob = async (job: JobI) => {
  const parsedDescription = DOMPurify.sanitize(marked(job.description));

  job.description = parsedDescription;
  const response = await fetch(
    `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/jobs/${job.ID}`,
    {
      method: "PUT",
      body: JSON.stringify(job),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Could not update job");
  }

  return await response.json();
};

export const useUpdateJob = () => {
  const { refetchJobs } = useJobs();

  const { mutate, error, isSuccess } = useMutation(updateJob, {
    onSuccess: refetchJobs,
  });

  return { mutate, error, isSuccess };
};
