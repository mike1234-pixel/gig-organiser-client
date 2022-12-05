import { useQuery } from "react-query";

export interface Job {
  CreatedAt: string;
  DeletedAt: string;
  ID: number;
  UpdatedAt: string;
  description: string;
  organisation: string;
  priority: 8;
  status: string;
  title: string;
}

export const useJobs = () => {
  const { data, isLoading, error } = useQuery("jobs", () =>
    fetch("http://localhost:3002/jobs").then((response) => response.json())
  );

  return { jobs: data, isLoading, error };
};
