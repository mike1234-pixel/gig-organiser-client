import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { Button } from "../../../common/Button";
import { useTranslation } from "react-i18next";
import styles from "./UserSignUp.module.css";

export const UserSignUpForm = () => {
  const formik = useFormikContext();

  const { t } = useTranslation();

  return (
    <Form>
      <>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="name"
          className={styles.errorMessage}
        />
        <Field
          type="email"
          name="email"
          placeholder="Email"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="email"
          className={styles.errorMessage}
        />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="password"
          className={styles.errorMessage}
        />
        <Button type="submit" disabled={formik.isSubmitting}>
          {t("signup.submit")} <BsFillDoorOpenFill />
        </Button>
      </>
    </Form>
  );
};
