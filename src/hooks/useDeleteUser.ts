import { useMutation } from "react-query";
import { UserI } from "../types/User_Object";

const deleteUser = async (user: UserI) => {
  const response = await fetch(`http://localhost:3002/user/${user.ID}`, {
    method: "DELETE",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("Could not delete user");
  }

  return await response.json();
};

export const useDeleteUser = () => {
  const { mutate, error, isSuccess } = useMutation(deleteUser);

  return { mutate, error, isSuccess };
};
