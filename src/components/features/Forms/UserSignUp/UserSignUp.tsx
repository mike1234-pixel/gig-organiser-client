import { useCreateUser } from "../../../../hooks/useCreateUser";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserSignUpI } from "../../../../types/User_Signup_Object";
import { UserSignUpForm } from "./UserSignUpForm";
import { ContentBox } from "../ContentBox";
import styles from "./UserSignUp.module.css";

export const UserSignUp = () => {
  const initialValues: UserSignUpI = {
    name: "",
    email: "",
    password: "",
  };

  const { mutate, error, isSuccess } = useCreateUser();

  if (isSuccess) return <ContentBox title="User created." />;

  if (error)
    return (
      <ContentBox title="Error">
        <p>{error.message}</p>
      </ContentBox>
    );

  return (
    <ContentBox title="Sign Up">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserSignUpForm />
      </Formik>
    </ContentBox>
  );
};
