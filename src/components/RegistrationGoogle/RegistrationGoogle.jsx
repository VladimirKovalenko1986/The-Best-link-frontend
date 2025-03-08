import { FaGooglePlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { fetchGoogleOAuthUrl } from "../../redux/auth/operations.js";
import css from "./RegistrationGoogle.module.css";

export default function RegistrationGoogle() {
  const dispatch = useDispatch();

  const handleGoogleLogin = async () => {
    try {
      const response = await dispatch(fetchGoogleOAuthUrl()).unwrap();
      window.location.href = response; // Перенаправляємо користувача на Google
    } catch (error) {
      console.error("Failed to get Google OAuth URL:", error);
    }
  };
  return (
    <div className={css.conteiner}>
      <p className={css.text}>or</p>
      <button onClick={handleGoogleLogin} className={css.btn}>
        <FaGooglePlus className={css.icon} />
        LogIn from google
      </button>
    </div>
  );
}
