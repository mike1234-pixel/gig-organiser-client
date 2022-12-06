import { UserSignUpI } from "../types/User_Signup_Object";
import { useMutation } from "react-query";

const createUser = async (values: UserSignUpI) => {
  const response = await fetch("http://localhost:3002/create-user", {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

export const useCreateUser = () => {
  const { mutate, error } = useMutation(createUser);

  return { mutate, error };
};
