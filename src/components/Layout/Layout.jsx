import { Suspense } from "react";
import AppBar from "../AppBar/AppBar.jsx";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.conteiner}>
      <AppBar />
      <Suspense fallback={<div>Loading content...</div>}>{children}</Suspense>
    </div>
  );
}
