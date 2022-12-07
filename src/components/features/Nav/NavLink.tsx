import classNames from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Nav.module.css";

interface NavLinkItemProps {
  path: string;
  name: string;
  dynamicRouteId?: number | null;
}

export const NavLinkItem = ({
  path,
  name,
  dynamicRouteId = null,
}: NavLinkItemProps) => {
  const location = useLocation();

  const activeMatch = dynamicRouteId
    ? location.pathname.includes(path)
    : location.pathname === path;

  return (
    <li>
      <NavLink
        to={dynamicRouteId ? `${path}/${dynamicRouteId}` : path}
        className={classNames(styles.navLink, activeMatch && styles.active)}
      >
        {name}
      </NavLink>
    </li>
  );
};
