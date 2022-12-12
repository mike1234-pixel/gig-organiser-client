import { useAuth } from "../../../context/AuthContext";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import { Button } from "../../common/Button";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { useNavigate } from "react-router-dom";
import styles from "./Account.module.css";
import { AiOutlineUserDelete } from "react-icons/ai";

export const Account = () => {
  const { user, setUser } = useAuth();

  const { mutate, error, isSuccess } = useDeleteUser();

  const navigate = useNavigate();

  if (error)
    return (
      <LayoutPage>
        <ErrorState title="Error" text="Could not delete user" />
      </LayoutPage>
    );

  if (isSuccess) {
    setUser(null);
    navigate("/");
  }

  return (
    <>
      {user && (
        <LayoutPage>
          <h1 className={styles.title}>Welcome to your account page!</h1>
          <div className={styles.summary}>
            <p>
              Here you can see your email address and name, as well as delete
              your account.
            </p>
            <p>
              If you're feeling like it's time to say goodbye, you can delete
              your account from this page. Please note that this action cannot
              be undone, so make sure you really want to do it before hitting
              that big red button. Once your account is deleted, all of your
              data will be permanently removed from our systems.
            </p>
            <p>
              We hope you enjoy using the application. Thanks for being a part
              of our community!
            </p>
            <hr className={styles.rule} />
            <h2 className={styles.subtitle}>Account Details</h2>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <Button variant="danger" onClick={() => mutate(user)}>
              Delete Account <AiOutlineUserDelete />
            </Button>
          </div>
        </LayoutPage>
      )}
    </>
  );
};
