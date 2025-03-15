import { useDispatch, useSelector } from "react-redux";
import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import { selectIsLoggedIn, selectToken } from "../../redux/auth/selector.js";
import { useEffect, useRef, useCallback } from "react";
import { refreshUser } from "../../redux/auth/operations.js";

export default function AppBar() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  const refreshIntervalRef = useRef(null);

  // ✅ Функція для запуску інтервалу з useCallback
  const startAutoRefresh = useCallback(() => {
    if (refreshIntervalRef.current) {
      clearInterval(refreshIntervalRef.current);
    }

    // Оновлюємо токен кожні 14 хвилин (перед закінченням 15 хвилин)
    refreshIntervalRef.current = setInterval(() => {
      console.log("Attempting to refresh token...");
      dispatch(refreshUser());
    }, 14 * 60 * 1000);
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn && token) {
      startAutoRefresh();
    }

    // Очищення інтервалу при виході користувача або зміні токена
    return () => {
      if (refreshIntervalRef.current) {
        clearInterval(refreshIntervalRef.current);
      }
    };
  }, [isLoggedIn, token, startAutoRefresh]);

  return (
    <header className={css.conteiner}>
      <Navigation />
      <ThemeSwitcher />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
