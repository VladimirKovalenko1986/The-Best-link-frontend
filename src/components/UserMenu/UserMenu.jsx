import { useDispatch, useSelector } from "react-redux";
import { selectLoadingLogout, selectUser } from "../../redux/auth/selector.js";
import { logOut } from "../../redux/auth/operations.js";
import InfinitySpinLoading from "../InfinitySpinLoading/InfinitySpinLoading.jsx";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const loadingLogout = useSelector(selectLoadingLogout);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { photo, name } = user;
  const placeholderImage =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  const userPhoto =
    photo && typeof photo === "string" ? photo : placeholderImage;

  const handleLogout = () => {
    dispatch(logOut());
  };

  if (!user || !user.email) {
    return <InfinitySpinLoading />;
  }
  return (
    <div className={css.conteiner}>
      <img className={css.img} src={userPhoto} alt="photo user" />
      <b>Welcom, {name}!</b>
      <button className={css.btn} onClick={handleLogout}>
        {loadingLogout ? "Logout in user..." : "Logout"}
      </button>
    </div>
  );
}
