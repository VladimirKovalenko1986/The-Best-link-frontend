function PaymentCard({
  payment: { cardNumber, cardType, cardOwner, date, amount, isPaid },
}) {
  return (
    <div>
      <p>Amount: {amount}</p>
      <p>Status:{isPaid ? "Paid" : "Pading"}</p>
      <p>Card Number: {cardNumber}</p>
      <p>Card Type: {cardType}</p>
      <p>Card Holder Name: {cardOwner}</p>
      <p>Date: {date}</p>
      <hr />
    </div>
  );
}

export default PaymentCard;
