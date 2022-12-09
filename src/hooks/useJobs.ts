import { useQuery } from "react-query";
import { useAuth } from "../context/AuthContext";

export const useJobs = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery(
    "jobs",
    () =>
      fetch(`http://localhost:3002/jobs?userID=${user?.id}`).then((response) =>
        response.json()
      ),
    { refetchInterval: 5000 }
  );

  return { jobs: data || [], isLoading, error };
};
