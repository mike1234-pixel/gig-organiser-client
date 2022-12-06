import { useFormikContext, Form, Field } from "formik";
import styles from "./UserSignUp.module.css";

export const UserSignUpForm = () => {
  const formik = useFormikContext<any>();

  const { errors } = formik;

  return (
    <Form>
      <>
        <Field type="text" name="name" placeholder="Name" />
        {errors.name}
        <Field type="email" name="email" placeholder="Email" />
        {errors.email}
        <Field type="password" name="password" placeholder="Password" />
        {errors.password}
        <button type="submit" disabled={formik.isSubmitting}>
          Create User
        </button>
      </>
    </Form>
  );
};
