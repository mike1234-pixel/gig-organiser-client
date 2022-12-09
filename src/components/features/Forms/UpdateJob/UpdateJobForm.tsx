import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { Button } from "../../../common/Button";
import styles from "../FormStyles/Form.module.css";

export const UpdateJobForm = () => {
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
          min="0"
          max="10"
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
          name="status"
          placeholder="Status"
          className={styles.textInput}
          as="select"
          defaultValue="default"
        >
          <option value="" disabled>
            Select Status
          </option>
          <option value="pending">Pending</option>
          <option value="success">Success</option>
          <option value="declined">Declined</option>
        </Field>
        <ErrorMessage
          component="span"
          name="status"
          className={styles.errorMessage}
        />
        <Button type="submit" disabled={formik.isSubmitting}>
          Update Job
        </Button>
      </>
    </Form>
  );
};
