import { useState } from "react";
import PaymentList from "../PaymentList/PaymentList.jsx";
import payments from "../../payments.json";
import Reader from "../Reader/Reader.jsx";
import articles from "../../articles.json";
import ClickCounter from "../ClickCounter/ClickCounter.jsx";
import UserForm from "../userForm/userForm.jsx";
import TextInput from "../TextInput/TextInput.jsx";
import LangSwitcher from "../LongSwitcher/LangSwitcher.jsx";
import OrderForm from "../OrderForm/OrderForm.jsx";
import css from "./App.module.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lang, setLang] = useState("uk");

  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  const handleFormOrder = (newOrder) => {
    console.log("handleFormOrder", newOrder);
  };

  return (
    <div className={css.conteiner}>
      {/* Props */}
      <h1 className={css.title}>Text</h1>
      <PaymentList item={payments} />
      {/* useState, useEffect */}
      <Reader items={articles} />
      <ClickCounter />
      {/* Form неконтрольована */}
      <UserForm onAdd={handleAddUser} />
      {/* Input контрольований */}
      <TextInput value={inputValue} onType={setInputValue} />
      <p>{inputValue}</p>
      {/* Контрольований елемент */}
      <LangSwitcher value={lang} onChangeLang={setLang} />
      <p className={css.text}>Selected lang: {lang}</p>
      {/* Form контрольована */}
      <OrderForm onOrder={handleFormOrder} />
    </div>
  );
}

export default App;
