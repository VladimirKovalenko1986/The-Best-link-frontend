import css from "./LangSwitcher.module.css";
import { useLang } from "../context/langContext.jsx";

export default function LangSwitcher() {
  const { lang, changeLang } = useLang();
  return (
    <div className={css.conteiner}>
      <span>Lang switcher</span>
      <select value={lang} onChange={(event) => changeLang(event.target.value)}>
        <option value="uk">UK</option>
        <option value="en">EN</option>
        <option value="pl">PL</option>
      </select>
    </div>
  );
}
