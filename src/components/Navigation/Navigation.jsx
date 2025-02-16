import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector.js";

const getNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={getNavLinkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/links" className={getNavLinkClass}>
          Links
        </NavLink>
      )}
    </nav>
  );
}
