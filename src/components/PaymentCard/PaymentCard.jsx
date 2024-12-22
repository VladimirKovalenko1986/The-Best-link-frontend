import clsx from "clsx";
import css from "./PaymentCard.module.css";

function PaymentCard({
  payment: { cardNumber, cardType, cardOwner, date, amount, isPaid },
}) {
  const amountClassNames = clsx(css.text, isPaid ? css.isPaid : css.isPending);
  return (
    <div className={css.conteiner}>
      <p className={css.text}>Amount: {amount}</p>
      <p className={amountClassNames}>Status: {isPaid ? "Paid" : "Pending"}</p>
      <p className={css.text}>Card Number: {cardNumber}</p>
      <p className={css.text}>Card Type: {cardType}</p>
      <p className={css.text}>Card Holder Name: {cardOwner}</p>
      <p className={css.text}>Date: {date}</p>
    </div>
  );
}

export default PaymentCard;
