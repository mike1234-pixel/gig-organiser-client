import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { ContentBox } from "../ContentBox";
import { Link } from "react-router-dom";
import { Button } from "../../../common/Button";
import { useAuth } from "../../../../context/AuthContext";
import styles from "./UserLogin.module.css";

export const UserLogin = () => {
  const initialValues: UserLoginI = {
    email: "",
    password: "",
  };

  const { mutate, error, isSuccess } = useLoginUser();

  const { user } = useAuth();

  if (isSuccess)
    return (
      <ContentBox title={`Welcome Back ${user?.name}`}>
        <Link to="/">
          <Button>Go to dashboard</Button>
        </Link>
      </ContentBox>
    );

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
