import css from "./Modal.module.css";

export default function Modal({ onClose, isOpen }) {
  if (!isOpen) return null;
  return (
    <div className={css.backDrop}>
      <div className={css.modal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis
          quod vitae dolor reiciendis architecto obcaecati laborum consectetur
          consequuntur. Atque?
        </p>
        <button onClick={onClose} className={css.btn}>
          X
        </button>
      </div>
    </div>
  );
}
