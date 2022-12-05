import { useEffect, useState } from "react";

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
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch("http://localhost:3002/jobs")
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return jobs;
};
