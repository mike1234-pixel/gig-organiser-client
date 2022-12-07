import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { useLoginState } from "../../../context/LoginStateProvider";
import { Container } from "../../common/Container";
import styles from "./Nav.module.css";

export const Nav = () => {
  const location = useLocation();

  const { isLoggedIn, user, setIsLoggedIn, setUser } = useLoginState();

  const handleClick = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.content}>
          <h1 className={styles.title}>Gig Organiser</h1>
          <ul className={styles.list}>
            <li>
              <NavLink
                to="/"
                className={classNames(
                  styles.navLink,
                  location.pathname === "/" && styles.active
                )}
              >
                Dashboard
              </NavLink>
            </li>
            {!isLoggedIn && (
              <>
                <li>
                  <NavLink
                    to="/signup"
                    className={classNames(
                      styles.navLink,
                      location.pathname === "/signup" && styles.active
                    )}
                  >
                    Sign Up
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/login"
                    className={classNames(
                      styles.navLink,
                      location.pathname === "/login" && styles.active
                    )}
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <NavLink
                    to={`user/${user.ID}`}
                    className={classNames(
                      styles.navLink,
                      location.pathname.includes("user") && styles.active
                    )}
                  >
                    {user.name}
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={handleClick}
                    className={styles.navLinkButton}
                  >
                    Log Out
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </Container>
    </nav>
  );
};
