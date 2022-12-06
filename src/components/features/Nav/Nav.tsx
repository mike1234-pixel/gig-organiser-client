import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  return (
    <>
      <Link to="/signup">signup</Link>
      <Link to="/login">login</Link>
    </>
  );
};
