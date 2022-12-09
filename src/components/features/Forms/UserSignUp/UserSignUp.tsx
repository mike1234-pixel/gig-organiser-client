import { useCreateUser } from "../../../../hooks/useCreateUser";
import { Formik } from "formik";
import { validationSchema } from "./validationSchema";
import { UserSignUpI } from "../../../../types/User_Signup_Object";
import { UserSignUpForm } from "./UserSignUpForm";
import { LayoutPage } from "../../../common/LayoutPage";
import styles from "./UserSignUp.module.css";
import { Button } from "../../../common/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ErrorState } from "../../../common/ErrorState";

export const UserSignUp = () => {
  const initialValues: UserSignUpI = {
    name: "",
    email: "",
    password: "",
  };

  const { mutate, error: responseError, isSuccess } = useCreateUser();

  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(responseError);
  }, [responseError]);

  if (isSuccess)
    return (
      <LayoutPage>
        <h1 className={styles.title}>You're Set</h1>
        <p>
          Welcome to Gig Organiser! You're all set and ready to start organising
          your job search like a pro.
        </p>
        <p>
          Log in to your account and start taking control of your job search.
          With Gig Organiser, landing your next job opportunity is just a few
          clicks away!
        </p>
        <Button>
          <Link to="/login">Login to your account</Link>
        </Button>
      </LayoutPage>
    );

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text={error.message} />
        <Button onClick={() => setError(null)}>Try Again</Button>
      </LayoutPage>
    );

  return (
    <LayoutPage>
      <div className={styles.intro}>
        <h1 className={styles.title}>Welcome to Gig Organiser!</h1>
        <p>
          To get started, all you need to do is{" "}
          <strong>sign up for your account.</strong>
        </p>
        <p>
          <strong>No need to worry about email verification</strong> - just
          enter your desired username and password, and you'll be on your way to
          keeping track of your job search like a pro.
        </p>
        <p>
          Once you're signed up, you'll have access to all the features that
          make Gig Organiser the best way to organise your job search.
        </p>
        <p>
          So go ahead, sign up and get organised -{" "}
          <strong>your next job opportunity is just a few clicks away!</strong>
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => mutate(values)}
      >
        <UserSignUpForm />
      </Formik>
    </LayoutPage>
  );
};
