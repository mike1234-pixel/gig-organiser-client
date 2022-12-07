import { useLoginState } from "../../../context/LoginStateProvider";
import { ContentBox } from "../../features/Forms/ContentBox";
import styles from "./Account.module.css";

export const Account = () => {
  const { user } = useLoginState();

  return (
    <ContentBox>
      {user ? (
        <>
          <p>{user?.name}</p>
          <p>{user?.email}</p>
        </>
      ) : (
        <p>Logged out.</p>
      )}
    </ContentBox>
  );
};
