import PaymentCard from "./PaymentCard.jsx";

function PaymentList({ item }) {
  return (
    <ul>
      {item.map((item) => (
        <li key={item.id}>
          <PaymentCard payment={item} />
        </li>
      ))}
    </ul>
  );
}

export default PaymentList;
