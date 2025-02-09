import css from "./LinkItem.module.css";

export default function LinkItem({
  link: { nameType, link, nameLink, textLink },
}) {
  return (
    <div className={css.conteiner}>
      <p>{nameType}</p>
      <a href={link} className={css.link}>
        {nameLink}
      </a>
      <p>{textLink}</p>
      <div className={css.wrapper}>
        <button className={css.btnDelete}>Delete</button>
        <button className={css.btnEdite}>Edite</button>
      </div>
    </div>
  );
}
