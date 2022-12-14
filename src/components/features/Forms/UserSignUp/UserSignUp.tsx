import { useCreateUser } from "../../../../hooks/useCreateUser";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserSignUpI } from "../../../../types/User_Signup_Object";
import { UserSignUpForm } from "./UserSignUpForm";
import { LayoutPage } from "../../../common/LayoutPage";
import { Button } from "../../../common/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorState } from "../../../common/ErrorState";
import { BiLogIn } from "react-icons/bi";
import { Trans, useTranslation } from "react-i18next";
import styles from "./UserSignUp.module.css";

export const UserSignUp = () => {
  const initialValues: UserSignUpI = {
    name: "",
    email: "",
    password: "",
  };

  const { mutate, error: responseError, isSuccess } = useCreateUser();

  const { t } = useTranslation();

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(responseError as Error);
  }, [responseError]);

  if (isSuccess)
    return (
      <LayoutPage>
        <h1 className={styles.title}>{t("signup.success.title")}</h1>
        <Trans i18nKey="signup.success.intro.one" />
        <Trans i18nKey="signup.success.intro.two" />
        <Button>
          <Link to="/login">{t("signup.success.login")}</Link> <BiLogIn />
        </Button>
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text={error.message} />
        <Button onClick={() => setError(null)}>{t("error.tryagain")}</Button>
      </LayoutPage>
    );

  return (
    <LayoutPage>
      <div className={styles.intro}>
        <h1 className={styles.title}>{t("signup.title")}</h1>
        <Trans i18nKey="signup.intro.one" />
        <Trans i18nKey="signup.intro.two" />
        <Trans i18nKey="signup.intro.three" />
        <Trans i18nKey="signup.intro.four" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserSignUpForm />
      </Formik>
    </LayoutPage>
  );
};
