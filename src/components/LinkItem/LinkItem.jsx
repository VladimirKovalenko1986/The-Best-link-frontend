import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { deleteLink } from "../../redux/links/operations.js";
import { openModal } from "../../redux/links/slice.js";
import ModalDeleteLink from "../ModalDeleteLink/ModalDeleteLink.jsx";
import ModalEditeLink from "../ModalEditeLink/ModalEditeLink.jsx";
import css from "./LinkItem.module.css";
import {
  selectIsOpen,
  selectModalLinkId,
  selectModalType,
} from "../../redux/links/selectors.js";

export default function LinkItem({
  link: { _id, nameType, link, nameLink, textLink },
}) {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const modalLinkId = useSelector(selectModalLinkId);
  const modalType = useSelector(selectModalType);

  return (
    <div className={css.conteiner}>
      <p>{nameType}</p>
      <a
        href={link}
        className={css.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {nameLink}
      </a>
      <p>{textLink}</p>
      <div className={css.wrapper}>
        <button
          className={css.btnDelete}
          onClick={() => dispatch(openModal({ id: _id, type: "delete" }))}
        >
          Delete
        </button>
        <button
          className={css.btnEdite}
          onClick={() => dispatch(openModal({ id: _id, type: "edit" }))}
        >
          Edite
        </button>
        {isOpen && modalLinkId === _id && modalType === "delete" && (
          <ModalDeleteLink />
        )}
        {isOpen && modalLinkId === _id && modalType === "edit" && (
          <ModalEditeLink />
        )}
      </div>
    </div>
  );
}
