import { useQuery } from "react-query";
import { useAuth } from "../context/AuthContext";
import { ActionI } from "../types/Action_Object";

export const useActions = () => {
  const { user } = useAuth();

  const { data, isLoading, error } = useQuery<ActionI[], Error>("actions", () =>
    fetch(
      `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/actions?userID=${user?.ID}`
    ).then((response) => response.json())
  );

  return { actions: data, isLoading, error };
};
