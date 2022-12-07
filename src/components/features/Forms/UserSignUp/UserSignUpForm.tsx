import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import styles from "./UserSignUp.module.css";

export const UserSignUpForm = () => {
  const formik = useFormikContext<any>();

  const { errors } = formik;

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
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={styles.submitButton}
        >
          Create User
        </button>
      </>
    </Form>
  );
};
