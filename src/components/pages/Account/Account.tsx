import { useAuth } from "../../../context/AuthContext";
import { ContentBox } from "../../features/Forms/ContentBox";
import styles from "./Account.module.css";

export const Account = () => {
  const { user } = useAuth();

  return (
    <>
      {user ? (
        <ContentBox title="Account">
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </ContentBox>
      ) : (
        <ContentBox title="Logged Out." />
      )}
    </>
  );
};
