import { useQuery } from "react-query";
import { useLoginState } from "../context/LoginStateProvider";

export const useJobs = () => {
  const { user } = useLoginState();

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
