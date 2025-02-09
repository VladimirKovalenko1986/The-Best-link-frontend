import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiscussLoading from "../DiscussLoading/DiscussLoading.jsx";
import AppBar from "../AppBar/AppBar.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.conteiner}>
      <AppBar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Suspense fallback={<DiscussLoading />}>{children}</Suspense>
    </div>
  );
}
