import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { Button } from "../../../common/Button";
import { useAuth } from "../../../../context/AuthContext";
import { LayoutPage } from "../../../common/LayoutPage";
import { ErrorState } from "../../../common/ErrorState";
import { useEffect, useState } from "react";
import { WelcomeState } from "../../../common/WelcomeState";
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
        <WelcomeState
          title={`Welcome back ${user?.name}`}
          text={"to manage your jobs and actions."}
        />
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
      <h1 className={styles.title}>Login</h1>
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
