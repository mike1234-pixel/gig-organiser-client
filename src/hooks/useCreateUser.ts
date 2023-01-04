import { UserSignUpI } from "../types/User_Signup_Object";
import { useMutation } from "react-query";

const createUser = async (values: UserSignUpI) => {
  const response = await fetch(
    "https://gig-organiser-api-7eqmwx53oq-uc.a.run.app/create-user",
    {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status === 400) {
    throw new Error("A user with the submitted email already exists");
  }
  if (response.status !== 200) {
    throw new Error("An error occurred while creating the user");
  }

  return await response.json();
};

export const useCreateUser = () => {
  const { mutate, error, isSuccess, isLoading } = useMutation(createUser);

  return { mutate, error, isSuccess, isLoading };
};
