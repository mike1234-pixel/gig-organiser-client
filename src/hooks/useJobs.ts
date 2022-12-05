import { useQuery } from "react-query";

export const useJobs = () => {
  const { data, isLoading, error } = useQuery("jobs", () =>
    fetch("http://localhost:3002/jobs").then((response) => response.json())
  );

  return { jobs: data, isLoading, error };
};
