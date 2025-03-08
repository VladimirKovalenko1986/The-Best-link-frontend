import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/slice.js";
import { selectTheme } from "../../redux/theme/selectors.js";
import css from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  return (
    <button className={css.switcher} onClick={() => dispatch(toggleTheme())}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
