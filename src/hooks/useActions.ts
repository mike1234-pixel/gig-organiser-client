import { useQuery } from "react-query";
import { useAuth } from "../context/AuthContext";
import { ActionI } from "../types/Action_Object";

export const useActions = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery<any, Error, ActionI[], "actions">(
    "actions",
    () =>
      fetch(`http://localhost:3002/actions?userID=${user?.ID}`).then(
        (response) => response.json()
      ),
    {
      refetchInterval: 5000,
    }
  );

  return { actions: data, isLoading, error };
};
