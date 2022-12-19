import { useQuery } from "react-query";
import { useAuth } from "../context/AuthContext";
import { JobI } from "../types/Job_Object";

export const useJobs = () => {
  const { user } = useAuth();

  const { data, isLoading, error, refetch } = useQuery<JobI[], Error>(
    "jobs",
    () =>
      fetch(
        `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/jobs?userID=${user?.ID}`
      ).then((response) => response.json())
  );

  const refetchJobs = () => {
    refetch();
  };

  return { jobs: data, isLoading, error, refetchJobs };
};
