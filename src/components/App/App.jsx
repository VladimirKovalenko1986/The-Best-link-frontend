// import PaymentList from "../PaymentList/PaymentList.jsx";
// import payments from "../../payments.json";
import Reader from "../Reader/Reader.jsx";
import articles from "../../articles.json";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.conteiner}>
      <Reader items={articles} />
      {/* <h1 className={css.text}>Text</h1>
      <PaymentList item={payments} /> */}
    </div>
  );
}

export default App;
