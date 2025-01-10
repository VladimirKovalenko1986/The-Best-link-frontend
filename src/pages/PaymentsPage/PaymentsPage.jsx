import { useEffect, useState } from "react";
import { getPayments } from "../../payments-api.js";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import PaymentListApi from "../../components/PaymentListApi/PaymentListApi.jsx";

export default function PaymentsPage() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPayments() {
      try {
        setError(false);
        setLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPayments();
  }, []);
  return (
    <div>
      <h2>Payments Page</h2>
      {loading && <DiscussLoading />}
      {error && <b>Ooops! There was an error! Please reload!</b>}
      {payments.length > 0 && <PaymentListApi items={payments} />}
    </div>
  );
}
