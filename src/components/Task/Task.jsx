import css from "./Task.module.css";

export default function Task({ data: { text, id }, onDelete }) {
  return (
    <div className={css.conteiner}>
      <p>{text}</p>
      <button onClick={() => onDelete(id)} className={css.btn}>
        DELETE
      </button>
    </div>
  );
}
