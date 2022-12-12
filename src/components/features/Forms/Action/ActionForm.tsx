import classNames from "classnames";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { ChangeEvent } from "react";
import { MdAddTask } from "react-icons/md";
import { useJobs } from "../../../../hooks/useJobs";
import { JobI } from "../../../../types/Job_Object";
import { Button } from "../../../common/Button";
import styles from "./ActionForm.module.css";

export const ActionForm = ({ buttonText }: { buttonText: string }) => {
  const formik = useFormikContext<any>();

  const { jobs } = useJobs();

  return (
    <Form>
      <>
        <label className={styles.label} htmlFor="name">
          Action Name
        </label>
        <Field type="text" name="name" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="name"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="description">
          Description
        </label>
        <Field
          type="text"
          name="description"
          as="textarea"
          className={styles.textInput}
        />
        <ErrorMessage
          component="span"
          name="description"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="completed_by">
          When should this action be completed by?
        </label>
        <Field
          type="datetime-local"
          min={new Date()}
          name="complete_by"
          className={classNames(styles.textInput, styles.textarea)}
        />
        <ErrorMessage
          component="span"
          name="complete_by"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="jobid">
          What job is this action for?
        </label>
        <Field
          name="jobid"
          placeholder="Job"
          className={styles.textInput}
          as="select"
        >
          {jobs?.map((job: JobI) => {
            return (
              <option key={job.ID} value={job.ID}>
                {job.title} @ {job.organisation}
              </option>
            );
          })}
        </Field>
        <ErrorMessage
          component="span"
          name="jobid"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="completed">
          Action completed?
        </label>
        <Field
          type="checkbox"
          name="completed"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue("completed", event.target.checked);
          }}
        />

        <ErrorMessage
          component="span"
          name="jobid"
          className={styles.errorMessage}
        />
        <Button type="submit" disabled={formik.isSubmitting}>
          {buttonText} <MdAddTask />
        </Button>
      </>
    </Form>
  );
};
