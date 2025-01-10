export default function PaymentInfo({
  payment: { points, type, title, created_at },
}) {
  return (
    <div>
      <ul>
        <li>Title: {title}</li>
        <li>Points: {points}</li>
        <li>Type: {type}</li>
        <li>Created: {created_at}</li>
      </ul>
    </div>
  );
}
