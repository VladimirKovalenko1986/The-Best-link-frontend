import css from "./UserMenu.module.css";

export default function UserMenu() {
  return (
    <div>
      <b>Welcom user!</b>
      <button className={css.btn}>Logout</button>
    </div>
  );
}
