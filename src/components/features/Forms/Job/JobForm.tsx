import classNames from "classnames";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { Button } from "../../../common/Button";
import styles from "./JobForm.module.css";

export const JobForm = ({ buttonText }: { buttonText: string }) => {
  const formik = useFormikContext<any>();

  return (
    <Form>
      <>
        <label className={styles.label} htmlFor="title">
          Job Title
        </label>
        <Field type="text" name="title" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="title"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="organisation">
          Organisation
        </label>
        <Field type="text" name="organisation" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="organisation"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="description">
          Enter a job description, or any notes you want!
        </label>
        <Field
          type="text"
          name="description"
          as="textarea"
          className={classNames(styles.textInput, styles.textarea)}
        />
        <ErrorMessage
          component="span"
          name="description"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="priority">
          Set the priority. On a scale of 1-10 (1 being low), how important is
          this opportunity?
        </label>
        <Field
          type="number"
          min="1"
          max="10"
          name="priority"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="priority"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="description">
          What is the status of the application?
        </label>
        <Field
          name="status"
          placeholder="Status"
          className={styles.textInput}
          as="select"
        >
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
          {buttonText}
        </Button>
      </>
    </Form>
  );
};
