// import { useState } from "react";
// import PaymentList from "../PaymentList/PaymentList.jsx";
// import payments from "../../payments.json";
// import Reader from "../Reader/Reader.jsx";
// import articles from "../../articles.json";
// import ClickCounter from "../ClickCounter/ClickCounter.jsx";
// import UserForm from "../userForm/userForm.jsx";
// import TextInput from "../TextInput/TextInput.jsx";
// import LangSwitcher from "../LongSwitcher/LangSwitcher.jsx";
// import OrderForm from "../OrderForm/OrderForm.jsx";
// import initialTasks from "../../tasks.json";
// import Filter from "../Filter/Filter.jsx";
// import Form from "../Form/Form.jsx";
// import TaskList from "../TaskList/TaskList.jsx";
import UserFormFormik from "../UserFormFormik/UserFormFormik.jsx";
import css from "./App.module.css";

function App() {
  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const [lang, setLang] = useState("uk");

  // const addTask = (newTask) => {
  //   setTasks((prevTasks) => {
  //     return [...prevTasks, newTask];
  //   });
  // };

  // const deleteTask = (taskId) => {
  //   setTasks((prevTasks) => {
  //     return prevTasks.filter((task) => task.id !== taskId);
  //   });
  // };

  // const visibleTasks = tasks.filter((task) =>
  //   task.text.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  // );

  const handleAddUser = (newUser) => {
    console.log("handleAddUser", newUser);
  };

  // const handleFormOrder = (newOrder) => {
  //   console.log("handleFormOrder", newOrder);
  // };

  return (
    <div className={css.conteiner}>
      {/* Props */}
      {/* <h1 className={css.title}>Text</h1> */}
      {/* <PaymentList item={payments} /> */}
      {/* useState, useEffect */}
      {/* <Reader items={articles} /> */}
      {/* <ClickCounter /> */}
      {/* Form неконтрольована */}
      {/* <UserForm onAdd={handleAddUser} /> */}
      {/* Input контрольований */}
      {/* <TextInput value={inputValue} onType={setInputValue} /> */}
      {/* <p>{inputValue}</p> */}
      {/* Контрольований елемент */}
      {/* <LangSwitcher value={lang} onChangeLang={setLang} /> */}
      {/* <p className={css.text}>Selected lang: {lang}</p> */}
      {/* Form контрольована */}
      {/* <OrderForm onOrder={handleFormOrder} /> */}

      {/* Colections elements controls fom and controls element*/}
      {/* <div className={css.conteiner}>
        <Form onAdd={addTask} />
        <Filter value={filter} onFilter={setFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </div> */}

      {/* Formik */}
      <UserFormFormik onAdd={handleAddUser} />
    </div>
  );
}

export default App;
