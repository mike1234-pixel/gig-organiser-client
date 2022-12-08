import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import styles from "../FormStyles/Form.module.css";

export const AddJobForm = () => {
  const formik = useFormikContext<any>();

  return (
    <Form>
      <>
        <Field
          type="text"
          name="title"
          placeholder="Title"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="title"
          className={styles.errorMessage}
        />
        <Field
          type="text"
          name="organisation"
          placeholder="Organisation"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="organisation"
          className={styles.errorMessage}
        />
        <Field
          type="text"
          name="description"
          placeholder="Description"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="description"
          className={styles.errorMessage}
        />
        <Field
          type="number"
          name="priority"
          placeholder="Priority"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="priority"
          className={styles.errorMessage}
        />
        <Field
          type="text"
          name="status"
          placeholder="Status"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="status"
          className={styles.errorMessage}
        />
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={styles.submitButton}
        >
          Add Job
        </button>
      </>
    </Form>
  );
};
