import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/auth/operations.js";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector.js";

export default function GoogleRedirectPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      dispatch(loginWithGoogle(code))
        .unwrap()
        .then((res) => {
          console.log("Google login response:", res); // ✅ Лог для перевірки
        })
        .catch((error) => {
          console.error("Google login error:", error);
          navigate("/login");
        });
    } else {
      console.error("Google OAuth code not found in URL.");
      navigate("/login");
    }
  }, [dispatch, navigate, searchParams]);

  useEffect(() => {
    if (isLoggedIn && user.email) {
      navigate("/links");
    }
  }, [isLoggedIn, user, navigate]);

  return <p>Logging in with Google...</p>;
}
