import PaymentCardApi from "../PaymentCardApi/PaymentCardApi.jsx";
import css from "./PaymentListApi.module.css";

export default function PaymentListApi({ items }) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.story_id}>
          <PaymentCardApi payment={item} />
        </li>
      ))}
    </ul>
  );
}
