import { useCreateUser } from "../../../../hooks/useCreateUser";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserSignUpI } from "../../../../types/User_Signup_Object";
import { UserSignUpForm } from "./UserSignUpForm";
import styles from "./UserSignUp.module.css";

export const UserSignUp = () => {
  const initialValues: UserSignUpI = {
    name: "",
    email: "",
    password: "",
  };

  const { mutate, error, isSuccess } = useCreateUser();

  if (isSuccess) return <>User created.</>;

  if (error) return <>User with this email already exists.</>;

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserSignUpForm />
      </Formik>
    </>
  );
};
