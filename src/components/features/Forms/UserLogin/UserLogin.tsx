import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { Link } from "react-router-dom";
import { Button } from "../../../common/Button";
import { useAuth } from "../../../../context/AuthContext";
import { LayoutPage } from "../../../common/LayoutPage";
import { ErrorState } from "../../../common/ErrorState";
import { useEffect, useState } from "react";
import styles from "./UserLogin.module.css";

export const UserLogin = () => {
  const initialValues: UserLoginI = {
    email: "",
    password: "",
  };

  const { mutate, error: responseError, isSuccess } = useLoginUser();

  const { user } = useAuth();

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(responseError);
  }, [responseError]);

  if (isSuccess)
    return (
      <LayoutPage>
        <h1 className={styles.title}>{`Welcome Back ${user?.name}`}</h1>
        <Link to="/">
          <Button>Go to dashboard</Button>
        </Link>
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text={error.message} />
        <Button onClick={() => setError(null)}>Try Again</Button>
      </LayoutPage>
    );

  return (
    <LayoutPage>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserLoginForm />
      </Formik>
    </LayoutPage>
  );
};
