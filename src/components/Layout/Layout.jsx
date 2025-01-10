import Navigation from "../Navigation/Navigation.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.conteiner}>
      <Navigation />
      {children}
    </div>
  );
}
