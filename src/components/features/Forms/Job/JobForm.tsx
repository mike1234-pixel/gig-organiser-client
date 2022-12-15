import classNames from "classnames";
import { ErrorMessage, Field, Form, useFormikContext } from "formik";
import { Button } from "../../../common/Button";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useTranslation } from "react-i18next";
import styles from "./JobForm.module.css";

export const JobForm = ({ buttonText }: { buttonText: string }) => {
  const formik = useFormikContext();

  const { t } = useTranslation();

  return (
    <Form>
      <>
        <label className={styles.label} htmlFor="title">
          {t("jobs.form.label.title")}
        </label>
        <Field type="text" name="title" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="title"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="organisation">
          {t("jobs.form.label.organisation")}
        </label>
        <Field type="text" name="organisation" className={styles.textInput} />
        <ErrorMessage
          component="span"
          name="organisation"
          className={styles.errorMessage}
        />
        <label className={styles.label} htmlFor="description">
          {t("jobs.form.label.description")}
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
          {t("jobs.form.label.priority")}
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
        <label className={styles.label} htmlFor="status">
          {t("jobs.form.label.status")}
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
          {buttonText} <MdOutlineCreateNewFolder />
        </Button>
      </>
    </Form>
  );
};
