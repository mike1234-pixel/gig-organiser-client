import { useMutation } from "react-query";
import { JobNewI } from "../types/Job_New_Object";
import { marked } from "marked";
import { useJobs } from "./useJobs";
import DOMPurify from "dompurify";

const addJob = async (newJob: JobNewI) => {
  const parsedDescription = DOMPurify.sanitize(marked(newJob.description));

  newJob.description = parsedDescription;

  const response = await fetch(
    "https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/job",
    {
      method: "POST",
      body: JSON.stringify(newJob),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("Could not create job");
  }

  return await response.json();
};

export const useAddJob = () => {
  const { refetchJobs } = useJobs();

  const { mutate, error, isSuccess } = useMutation(addJob, {
    onSuccess: refetchJobs,
  });

  return { mutate, error, isSuccess };
};
