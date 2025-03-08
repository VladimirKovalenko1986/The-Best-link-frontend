import { useSelector } from "react-redux";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import TitleLink from "../../components/TitleLink/TitleLink.jsx";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import RegistrationGoogle from "../../components/RegistrationGoogle/RegistrationGoogle.jsx";
import css from "./RegisterPage.module.css";

export default function RegisterPage() {
  const loading = useSelector((state) => state.auth.loading);

  return (
    <div className={css.conteiner}>
      <TitleLink text="Register you account" />
      {loading && <DiscussLoading />}
      <RegistrationForm />
      <RegistrationGoogle />
    </div>
  );
}
