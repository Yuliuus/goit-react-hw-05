import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const makeNavLinkActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={makeNavLinkActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkActive}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
