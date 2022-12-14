import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserLoginI } from "../../../../types/User_Login_Object";
import { UserLoginForm } from "./UserLoginForm";
import { useLoginUser } from "../../../../hooks/useLoginUser";
import { Button } from "../../../common/Button";
import { useAuth } from "../../../../context/AuthContext";
import { LayoutPage } from "../../../common/LayoutPage";
import { ErrorState } from "../../../common/ErrorState";
import { WelcomeState } from "../../../common/WelcomeState";
import { useTranslation } from "react-i18next";
import styles from "./UserLogin.module.css";

export const UserLogin = () => {
  const initialValues: UserLoginI = {
    email: "",
    password: "",
  };

  const { user, error, setError } = useAuth();

  const { mutate, isSuccess } = useLoginUser();

  const { t } = useTranslation();

  if (isSuccess)
    return (
      <LayoutPage>
        <WelcomeState
          title={`${t("login.welcome.title")} ${user?.name}`}
          text={t("login.welcome.text")}
        />
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title={t("error.title")} text={error.message} />
        <Button onClick={() => setError(null)}>{t("error.tryagain")}</Button>
      </LayoutPage>
    );

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
