import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { Button } from "../../../common/Button";
import { useAuth } from "../../../../context/AuthContext";
import { LayoutPage } from "../../../common/LayoutPage";
import { State } from "../../../common/State";
import { useTranslation } from "react-i18next";
import styles from "./UserLogin.module.css";
import { useEffect, useState } from "react";

export const UserLogin = () => {
  const initialValues: UserLoginI = {
    email: "",
    password: "",
  };

  const { user } = useAuth();

  const { mutate, error: loginError, isSuccess, isLoading } = useLoginUser();

  const { t } = useTranslation();

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(loginError as Error);
  }, [loginError]);

  if (isSuccess)
    return (
      <LayoutPage>
        <State
          type="welcome"
          title={`${t("login.welcome.title")} ${user?.name}`}
          text={t("login.welcome.text")}
        />
      </LayoutPage>
    );

  if (isLoading) {
    return (
      <LayoutPage>
        <State type="loading" title="Logging you in..." text="hang tight..." />
      </LayoutPage>
    );
  }

  if (error) {
    return (
      <LayoutPage>
        <State type="error" title={t("error.title")} text={error.message} />
        <Button onClick={() => setError(null)}>{t("error.tryagain")}</Button>
      </LayoutPage>
    );
  }

  return (
    <LayoutPage>
      <h1 className={styles.title}>{t("login.title")}</h1>
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
