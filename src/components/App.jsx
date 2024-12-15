import PaymentList from "./PaymentList.jsx";
import payments from "../payments.json";
console.log(payments);

function App() {
  return (
    <>
      <PaymentList item={payments} />
    </>
  );
}

export default App;
