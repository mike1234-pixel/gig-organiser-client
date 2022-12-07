import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import styles from "../FormStyles/Form.module.css";

export const UserLoginForm = () => {
  const formik = useFormikContext<any>();

  return (
    <Form>
      <>
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
          Login
        </button>
      </>
    </Form>
  );
};
