import { useId } from "react";
import css from "./Filter.module.css";

export default function Filter({ value, onFilter }) {
  const searchId = useId();

  return (
    <div className={css.conteiner}>
      <label htmlFor={searchId}>Serch by name</label>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        id={searchId}
      />
    </div>
  );
}
