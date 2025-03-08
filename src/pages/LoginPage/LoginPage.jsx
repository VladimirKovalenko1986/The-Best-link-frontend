import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import { useSelector, useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useEffect } from "react";
import { fetchGoogleOAuthUrl } from "../../redux/auth/operations.js";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoogleOAuthUrl());
  }, [dispatch]);

  const loading = useSelector((state) => state.auth.loading);
  return (
    <div>
      <TitleLink text="Sign in to your account! " />
      {loading && <DiscussLoading />}
      <LoginForm />
      <div className={css.conteiner}>
        <Link to="send-email-reset-password" className={css.link}>
          Click if you not remeber password!
        </Link>
      </div>
      <Suspense fallback={<DiscussLoading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
