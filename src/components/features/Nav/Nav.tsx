import classNames from "classnames";
import { useState } from "react";
import { useLoginState } from "../../../context/LoginStateProvider";
import { Container } from "../../common/Container";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { SiEditorconfig } from "react-icons/si";
import styles from "./Nav.module.css";
import { NavLinkItem } from "./NavLink";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { isLoggedIn, user, setIsLoggedIn, setUser } = useLoginState();

  const [navToggled, setNavToggled] = useState<boolean>(false);

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
            className={classNames(styles.list, navToggled && styles.collapsed)}
          >
            <NavLinkItem path="/" name="Dashboard" />
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
            onClick={() => setNavToggled(!navToggled)}
          >
            {navToggled ? <CgMenuRight /> : <CgClose />}
          </button>
        </div>
      </Container>
    </nav>
  );
};
