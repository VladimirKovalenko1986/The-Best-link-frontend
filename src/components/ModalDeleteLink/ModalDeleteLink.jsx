import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/links/slice.js";
import {
  selectLoadingDeleteLink,
  selectModalLinkId,
} from "../../redux/links/selectors.js";
import { deleteLink } from "../../redux/links/operations.js";
import clsx from "clsx";
import { selectTheme } from "../../redux/theme/selectors.js";
import RevolvingDotLoading from "../RevolvingDotLoading/RevolvingDotLoading.jsx";
import css from "./ModalDeleteLink.module.css";

export default function ModalDeleteLink() {
  const dispatch = useDispatch();
  const [modalRoot, setModalRoot] = useState(null);
  const id = useSelector(selectModalLinkId);
  const theme = useSelector(selectTheme);
  const loadingDeleteLink = useSelector(selectLoadingDeleteLink);

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
    <div className={css.backDrop}>
      <div className={clsx(css.modal, { [css.dark]: theme === "dark" })}>
        <div className={css.spiner}>
          {loadingDeleteLink && <RevolvingDotLoading />}
        </div>

        <p>You definitely want to delete this link?</p>
        <button className={css.btnClose} onClick={() => dispatch(closeModal())}>
          X
        </button>
        <div className={css.wrapper}>
          <button
            className={css.btnCancel}
            onClick={() => dispatch(closeModal())}
          >
            Cancel
          </button>
          <button
            className={css.btnDelete}
            onClick={() => dispatch(deleteLink(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // ✅ Модалка рендериться тут
  );
}
