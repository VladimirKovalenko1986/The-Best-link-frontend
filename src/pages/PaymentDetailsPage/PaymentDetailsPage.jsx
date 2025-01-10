import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getPaymentId } from "../../payments-api.js";
import DiscussLoading from "../../components/DiscussLoading/DiscussLoading.jsx";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo.jsx";

export default function PaymentDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPayment() {
      try {
        setError(false);
        setLoading(true);
        const data = await getPaymentId(paymentId);
        setPayment(data);
      } catch (error) {
        console.log(error.message);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPayment();
  }, [paymentId]);

  return (
    <div>
      {loading && <DiscussLoading />}
      {error && <b>Ooops! There was an error! Please reload!</b>}
      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="receipt">Receipt</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
