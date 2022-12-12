import { useAuth } from "../../../context/AuthContext";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import { Button } from "../../common/Button";
import { ErrorState } from "../../common/ErrorState";
import { LayoutPage } from "../../common/LayoutPage";
import { useNavigate } from "react-router-dom";
import styles from "./Account.module.css";

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
          <h1 className={styles.title}>Account</h1>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
          <p>
            Are you sure you want to delete your account? This action is
            permanent and cannot be undone. If you delete your account, you will
            be logged out and redirected to the home page.
          </p>
          <Button variant="danger" onClick={() => mutate(user)}>
            Delete Account
          </Button>
        </LayoutPage>
      )}
    </>
  );
};
