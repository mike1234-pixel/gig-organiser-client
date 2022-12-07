import { UserLoginI } from "../types/User_Login_Object";
import { useMutation } from "react-query";
import { useLoginState } from "../context/LoginStateProvider";
import { UserI } from "../types/User_Object";

const loginUser = async (values: UserLoginI) => {
  const response = await fetch(
    `http://localhost:3002/user?email=${values.email}&password=${values.password}`,
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
  const { mutate, error, isSuccess, data } = useMutation<
    UserI,
    Error,
    UserLoginI
  >(loginUser);

  // save user to global state
  const { setUser, setIsLoggedIn } = useLoginState();

  if (data) {
    setUser(data);
    setIsLoggedIn(true);
  }

  return { mutate, error, isSuccess };
};
