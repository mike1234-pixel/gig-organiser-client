import classNames from "classnames";
import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Container } from "../../common/Container";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { SiEditorconfig } from "react-icons/si";
import { NavLinkItem } from "./NavLink";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Nav.module.css";

export const Nav = () => {
  const { user, setUser } = useAuth();

  const navigate = useNavigate();

  const [navClosed, setNavClosed] = useState<boolean>(true);
  const [scroll, setScroll] = useState<boolean>(false);

  const handleClick = () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 2);
    });
  }, []);

  return (
    <nav className={classNames(styles.nav, scroll && styles.navScroll)}>
      <Container>
        <div className={styles.content}>
          <Link to="/" className={styles.titleLink}>
            <SiEditorconfig className={styles.logo} />
            <h1 className={styles.title}>Gig Organiser</h1>
          </Link>

          <ul
            className={classNames(styles.list, !navClosed && styles.collapsed)}
          >
            <NavLinkItem path="/" name={user ? "Jobs" : "Home"} />
            {user && <NavLinkItem path="/actions" name={"Actions"} />}
            {!user && (
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
                  dynamicRouteId={user.ID}
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
