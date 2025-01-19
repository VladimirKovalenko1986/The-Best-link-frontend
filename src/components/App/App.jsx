// import { useState, useEffect, useContext } from "react";
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
// import UserFormFormik from "../UserFormFormik/UserFormFormik.jsx";
// import { fetchArticles } from "../../articles-api.js";
// import ArticleList from "../ArticleList/ArticleList.jsx";
// import SearchForm from "../../SearchForm/SearchForm.jsx";
// import DiscussLoading from "../DiscussLoading/DiscussLoading.jsx";
// import RefBasic from "../RefBasic/RefBasic.jsx";
// import RefExample from "../RefExample/RefExample.jsx";
// import TimerRef from "../TimerRef/TimerRef.jsx";
// import { langContext, useLang } from "../context/langContext.jsx";
// import Modal from "../Modal/Modal.jsx";
// import { lazy } from "react";
// import { Routes, Route } from "react-router-dom";
// import Layout from "../Layout/Layout.jsx";
// import HomePage from "../../pages/HomePage/HomePage.jsx";
// import PaymentsPage from "../../pages/PaymentsPage/PaymentsPage.jsx";
// import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage.jsx";
// import PaymentDetailsPage from "../../pages/PaymentDetailsPage/PaymentDetailsPage.jsx";
// import { getPaymentId } from "../../payments-api.js";
// import Bank from "../Bank/Bank.jsx";
// import Receipt from "../Receipt/Receipt.jsx";
import { useSelector } from "react-redux";
import Balance from "../Balance/Balance.jsx";
import LangRedux from "../LangRedux/LangRedux.jsx";
import css from "./App.module.css";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
// const PaymentsPage = lazy(() =>
//   import("../../pages/PaymentsPage/PaymentsPage.jsx")
// );
// const PaymentDetailsPage = lazy(() =>
//   import("../../pages/PaymentDetailsPage/PaymentDetailsPage.jsx")
// );
// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage.jsx")
// );

// const Bank = lazy(() => import("../Bank/Bank.jsx"));
// const Receipt = lazy(() => import("../Receipt/Receipt.jsx"));

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  // Щоб не рухався backDrop
  // useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }

  // Очищення ефекту при розмонтуванні
  //   return () => document.body.classList.remove("no-scroll");
  // }, [isModalOpen]);

  // const { lang } = useLang();
  // console.log(langUseHuck);
  // const langCtxValue = useContext(langContext);
  // console.log(langCtxValue);

  // const [articles, setArticles] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const [query, setQuery] = useState("");
  // const [page, setPage] = useState(1);

  // Якщо реба щоб завантажувалось відразу
  // useEffect(() => {
  //   async function getArticles() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchArticles("html");
  //       setIsLoading(false);
  //       setArticles(data);
  //     } catch (error) {
  //       console.log(error.message);
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getArticles();
  // }, []);

  // const hendleSearchForm = (newSearch) => {
  //   setQuery(newSearch);
  //   setPage(1);
  //   setArticles([]);
  // };

  // const handleLoadMore = () => {
  //   setPage(page + 1);
  // };

  // useEffect(() => {
  //   if (query === "") {
  //     return;
  //   }
  //   async function getArticles() {
  //     try {
  //       setError(false);
  //       setIsLoading(true);
  //       const data = await fetchArticles(query, page);
  //       setArticles((prevArticles) => {
  //         return [...prevArticles, ...data];
  //       });
  //     } catch (error) {
  //       console.log(error.message);
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getArticles();
  // }, [query, page]);

  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState("");
  // const [inputValue, setInputValue] = useState("");
  // const [langSwitch, setLangSwitch] = useState("uk");

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

  // const handleAddUser = (newUser) => {
  //   console.log("handleAddUser", newUser);
  // };

  // const handleFormOrder = (newOrder) => {
  //   console.log("handleFormOrder", newOrder);
  // };

  // try {
  //     setIsLoading(true);
  //     const data = await fetchArticles(newSearch);
  //     setArticles(data);
  //   } catch (error) {
  //     console.log(error.message);
  //     setError(true);
  //   } finally {
  //     setIsLoading(false);
  //   }

  const lang = useSelector((state) => state.locale.lang);

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
      {/* <LangSwitcher />
      <p className={css.text}>Selected lang: {lang}</p> */}
      {/* Form контрольована */}
      {/* <OrderForm onOrder={handleFormOrder} /> */}
      {/* Colections elements controls fom and controls element*/}
      {/* <div className={css.conteiner}>
        <Form onAdd={addTask} />
        <Filter value={filter} onFilter={setFilter} />
        <TaskList tasks={visibleTasks} onDelete={deleteTask} />
      </div> */}
      {/* Formik */}
      {/* <UserFormFormik onAdd={handleAddUser} /> */}

      {/* Запити */}
      {/* <h1>HTTP requests in React</h1>
      <SearchForm onSearch={hendleSearchForm} />
      {error && <b>Ooops! There was an error! Please reload!</b>}
      {isLoading && <DiscussLoading />}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && !isLoading && (
        <button className={css.btn} onClick={handleLoadMore}>
          Load more articles
        </button>
      )} */}

      {/* useMemo, useRef, context, власні хуки */}
      {/* <RefBasic /> */}
      {/* <RefExample /> */}
      {/* <TimerRef /> */}
      {/* <p>{langCtxValue.lang}</p> */}
      {/* <p>Selected lang: {lang}</p> */}

      {/* Modal windiw */}
      {/* <div>
        <button className={css.btn} onClick={openModal}>
          Open modal
        </button>
        {isModalOpen && <Modal onClose={closeModal} isOpen={isModalOpen} />}
      </div> */}

      {/* Routers */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/payments" element={<PaymentsPage />} />
          <Route path="/payments/:paymentId" element={<PaymentDetailsPage />}>
            <Route path="bank" element={<Bank />} />
            <Route path="receipt" element={<Receipt />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout> */}

      {/* REDUX */}
      <Balance />
      <LangRedux />
      <p>Selected lang: {lang}</p>

      {/* REDUX TOOLKIT */}
    </div>
  );
}

export default App;
