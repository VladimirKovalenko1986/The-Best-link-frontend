import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import FormEditor from "../FormEditor/FormEditor.jsx";
import { closeModal } from "../../redux/links/slice.js";
import css from "./ModalEditeLink.module.css";

export default function ModalEditeLink() {
  const dispatch = useDispatch();
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    setModalRoot(document.getElementById("modal-root"));

    // 🔹 Блокування скролу
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto"; // Відновлення скролу при закритті
    };
  }, []);

  if (!modalRoot) return null;

  return createPortal(
    <div className={css.backDrop} onClick={() => dispatch(closeModal())}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <FormEditor />
        <button className={css.btnClose} onClick={() => dispatch(closeModal())}>
          X
        </button>
        <div className={css.wrapper}></div>
      </div>
    </div>,
    document.getElementById("modal-root") // ✅ Модалка рендериться тут
  );
}
