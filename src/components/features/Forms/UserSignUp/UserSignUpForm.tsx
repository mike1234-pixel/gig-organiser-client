import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../common/Button";
import styles from "./UserSignUp.module.css";

export const UserSignUpForm = () => {
  const formik = useFormikContext<any>();

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
          Sign Up
        </Button>
      </>
    </Form>
  );
};
