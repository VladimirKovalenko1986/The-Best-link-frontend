import { useDispatch, useSelector } from "react-redux";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selector.js";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations.js";

export default function AppBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <header className={css.conteiner}>
      <Navigation />
      <ThemeSwitcher />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
