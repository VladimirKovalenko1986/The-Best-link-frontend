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
import { toast } from "react-toastify"; // ✅ Додано імпорт
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

  const handleDelete = () => {
    dispatch(deleteLink(id))
      .unwrap()
      .then(() => {
        toast.success("Link successfully deleted!");
        dispatch(closeModal()); // ✅ Закриваємо модалку після видалення
      })
      .catch((err) => {
        toast.error(`Failed to delete link: ${err}`);
      });
  };

  return createPortal(
    <div className={css.backDrop}>
      <div className={clsx(css.modal, { [css.dark]: theme === "dark" })}>
        <div className={css.spiner}>
          {loadingDeleteLink && <RevolvingDotLoading />}
        </div>

        <p>Are you sure you want to delete this link?</p>

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

          <button className={css.btnDelete} onClick={handleDelete}>
            {loadingDeleteLink ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
