import { Link } from "react-router-dom";
import css from "./PaymentCardApi.module.css";

export default function PaymentCardApi({
  payment: { objectID, author, title, num_comments, points, url },
}) {
  return (
    <div className={css.conteiner}>
      <b>Author: {author}</b>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
      <b>Comments:{num_comments}</b>
      <b>Points:{points}</b>
      <Link to={`/payments/${objectID}`}>Details</Link>
    </div>
  );
}
