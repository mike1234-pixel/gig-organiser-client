import { Link } from "react-router-dom";
import { useLoginState } from "../../../context/LoginStateProvider";
import styles from "./Nav.module.css";

export const Nav = () => {
  const { user } = useLoginState();

  return (
    <nav className={styles.nav}>
      <p>{user?.name}</p>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>
    </nav>
  );
};
