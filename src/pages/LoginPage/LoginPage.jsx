import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import css from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div>
      <TitleLink text="Sign in to your account! " />
      <LoginForm />
    </div>
  );
}
