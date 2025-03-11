import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import { useEffect } from "react";
import { fetchGoogleOAuthUrl } from "../../redux/auth/operations.js";
import RegistrationGoogle from "../../components/RegistrationGoogle/RegistrationGoogle";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoogleOAuthUrl());
  }, [dispatch]);

  return (
    <div>
      <TitleLink text="Sign in to your account! " />
      <LoginForm />
      <RegistrationGoogle />
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
