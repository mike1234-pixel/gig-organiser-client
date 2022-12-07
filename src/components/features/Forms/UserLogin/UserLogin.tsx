import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { ContentBox } from "../ContentBox";
import styles from "./UserLogin.module.css";

export const UserLogin = () => {
  const initialValues: UserLoginI = {
    email: "",
    password: "",
  };

  const { mutate, error, isSuccess } = useLoginUser();

  if (isSuccess) return <ContentBox title="Successfully Logged In" />;

  if (error)
    return (
      <ContentBox title="Error">
        <p>{error.message}</p>
      </ContentBox>
    );

  return (
    <ContentBox title="Log In">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserLoginForm />
      </Formik>
    </ContentBox>
  );
};
