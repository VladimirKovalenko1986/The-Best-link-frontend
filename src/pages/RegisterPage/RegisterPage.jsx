import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.conteiner}>
      <TitleLink text="Register you account" />
      <RegistrationForm />
    </div>
  );
}
