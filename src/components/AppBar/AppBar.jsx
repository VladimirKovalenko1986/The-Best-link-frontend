import css from "./AppBar.module.css";
import Navigation from "../Navigation/Navigation.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";

export default function AppBar() {
  return (
    <div className={css.conteiner}>
      <Navigation />
      <UserMenu />
      <AuthNav />
    </div>
  );
}
