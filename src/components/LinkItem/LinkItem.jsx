import { useDispatch } from "react-redux";
import { deleteLink } from "../../redux/links/operations.js";
import css from "./LinkItem.module.css";

export default function LinkItem({
  link: { _id, nameType, link, nameLink, textLink },
}) {
  const dispatch = useDispatch();
  return (
    <div className={css.conteiner}>
      <p>{nameType}</p>
      <a
        href={link}
        className={css.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {nameLink}
      </a>
      <p>{textLink}</p>
      <div className={css.wrapper}>
        <button
          className={css.btnDelete}
          onClick={() => dispatch(deleteLink(_id))}
        >
          Delete
        </button>
        <button className={css.btnEdite}>Edite</button>
      </div>
    </div>
  );
}
