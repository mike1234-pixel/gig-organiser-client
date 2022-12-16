import { UserLoginI } from "../types/User_Login_Object";
import { useMutation } from "react-query";
import { useAuth } from "../context/AuthContext";

const loginUser = async (values: UserLoginI) => {
  const response = await fetch(
    `https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/user?email=${values.email}&password=${values.password}`,
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 404) {
    throw new Error("No user found with this email address");
  }
  if (response.status === 401) {
    throw new Error("Incorrect password");
  }
  if (response.status !== 200) {
    throw new Error("An error occurred while finding the user");
  }

  return await response.json();
};

export const useLoginUser = () => {
  const { setUser } = useAuth();
  const { mutate, error, isSuccess, isLoading } = useMutation(loginUser, {
    onSuccess: (data) => {
      setUser(data);
    },
  });

  return { mutate, error, isSuccess, isLoading };
};
