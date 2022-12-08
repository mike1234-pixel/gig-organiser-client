import { useFormikContext, Form, Field, ErrorMessage } from "formik";
import { Button } from "../../../common/Button";
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
        <Button type="submit" disabled={formik.isSubmitting}>
          Login
        </Button>
      </>
    </Form>
  );
};
