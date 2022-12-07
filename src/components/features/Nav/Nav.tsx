import { Link } from "react-router-dom";
import { useLoginState } from "../../../context/LoginStateProvider";
import styles from "./Nav.module.css";

export const Nav = () => {
  const { user } = useLoginState();

  return (
    <>
      <p style={{ marginRight: 50 }}>{user?.name}</p>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>
    </>
  );
};
