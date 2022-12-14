import classNames from "classnames";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { ChangeEvent, useContext } from "react";
import { MdAddTask } from "react-icons/md";
import { useJobs } from "../../../../hooks/useJobs";
import { JobI } from "../../../../types/Job_Object";
import { Button } from "../../../common/Button";
import { useTranslation } from "react-i18next";
import { FlyingHorseAnimationContext } from "../../../../context/Animation/FlyingHorseAnimationContext";
import { ConfettiAnimationContext } from "../../../../context/Animation/ConfettiAnimationContext";
import styles from "./ActionForm.module.css";

export const ActionForm = ({ buttonText }: { buttonText: string }) => {
  const formik = useFormikContext();

  const { jobs } = useJobs();

  const { t } = useTranslation();

  const { handleAction } = useContext(FlyingHorseAnimationContext);

  const { resetRenderConfetti } = useContext(ConfettiAnimationContext);

  return (
    <Form className={styles.form}>
      <>
        <label className={styles.label} htmlFor="name">
          {t("actions.form.label.name")}
        </label>
        <Field type="text" name="name" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="name"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="description">
          {t("actions.form.label.description")}
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
        <label className={styles.label} htmlFor="completed_by">
          {t("actions.form.label.completedBy")}
        </label>
        <Field
          type="datetime-local"
          min={new Date()}
          name="complete_by"
          className={classNames(styles.textInput)}
        />
        <ErrorMessage
          component="span"
          name="complete_by"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="jobid">
          {t("actions.form.label.job")}
        </label>
        <Field
          name="jobid"
          placeholder="Job"
          className={classNames(styles.textInput, styles.select)}
          as="select"
        >
          <option value="" disabled>
            Select Job
          </option>
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
          {t("actions.form.label.completed")}
        </label>
        <Field
          type="checkbox"
          name="completed"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            formik.setFieldValue("completed", event.target.checked);
            if (event.target.checked) {
              handleAction();
              resetRenderConfetti();
            }
          }}
        />
        <Button type="submit" disabled={formik.isSubmitting}>
          {buttonText} <MdAddTask />
        </Button>
      </>
    </Form>
  );
};
