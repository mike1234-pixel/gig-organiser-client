import { useLoginState } from "../../../context/LoginStateProvider";
import { ContentBox } from "../../features/Forms/ContentBox";
import styles from "./Account.module.css";

export const Account = () => {
  const { user } = useLoginState();

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
