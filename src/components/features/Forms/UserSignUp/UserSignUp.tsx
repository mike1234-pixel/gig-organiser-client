import { useCreateUser } from "../../../../hooks/useCreateUser";
import { Formik, Form, Field, useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserSignUpI } from "../../../../types/User_Signup_Object";
import styles from "./UserSignUp.module.css";

export const UserSignUp = () => {
  const initialValues: UserSignUpI = {
    name: "",
    email: "",
    password: "",
  };

  const { mutate, error } = useCreateUser();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => mutate(values)}
    >
      <Form>
        <Field type="text" name="name" placeholder="Name" />
        <Field type="email" name="email" placeholder="Email" />
        <Field type="password" name="password" placeholder="Password" />
        <button type="submit">Create User</button>
      </Form>
    </Formik>
  );
};
