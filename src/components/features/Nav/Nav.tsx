import classNames from "classnames";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Container } from "../../common/Container";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { SiEditorconfig } from "react-icons/si";
import styles from "./Nav.module.css";
import { NavLinkItem } from "./NavLink";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useAuth();

  const [navClosed, setNavClosed] = useState<boolean>(true);

  const handleClick = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.titleLink}>
            <SiEditorconfig className={styles.logo} />
            <h1 className={styles.title}>Gig Organiser</h1>
          </Link>

          <ul
            className={classNames(styles.list, !navClosed && styles.collapsed)}
          >
            <NavLinkItem path="/" name={isLoggedIn ? "Dashboard" : "Home"} />
            {!isLoggedIn && (
              <>
                <NavLinkItem path="/signup" name="Sign Up" />
                <NavLinkItem path="/login" name="Login" />
              </>
            )}
            {user && (
              <>
                <NavLinkItem
                  path="/user"
                  name={user.name}
                  dynamicRouteId={user.id}
                />
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
          <button
            className={styles.toggleButton}
            onClick={() => setNavClosed(!navClosed)}
          >
            {navClosed ? <CgMenuRight /> : <CgClose />}
          </button>
        </div>
      </Container>
    </nav>
  );
};
