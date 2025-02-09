import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import { useSelector } from "react-redux";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  const loading = useSelector((state) => state.auth.loading);
  return (
    <div>
      <TitleLink text="Sign in to your account! " />
      {loading && <DiscussLoading />}
      <LoginForm />
    </div>
  );
}
