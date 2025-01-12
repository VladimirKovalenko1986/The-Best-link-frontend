import { Link, useLocation } from "react-router-dom";
import css from "./PaymentCardApi.module.css";

export default function PaymentCardApi({
  payment: { objectID, author, title, num_comments, points, url },
}) {
  const location = useLocation();
  return (
    <div className={css.conteiner}>
      <b>Author: {author}</b>
      <a href={url} target="_blank" rel="noreferrer noopener">
        {title}
      </a>
      <b>Comments:{num_comments}</b>
      <b>Points:{points}</b>
      <Link to={`/payments/${objectID}`} state={location}>
        Details
      </Link>
    </div>
  );
}
