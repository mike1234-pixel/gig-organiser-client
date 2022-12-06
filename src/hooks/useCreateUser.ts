import { UserSignUpI } from "../types/User_Signup_Object";

export const useCreateUser = (values: UserSignUpI) => {
  console.log(values);
  // use react query to submit the post request to create the new user

  // the server needs to check whether the user email exists before it creates an account

  // if it does it should send back an error

  // otherwise success response
};
