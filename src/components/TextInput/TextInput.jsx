import { useId } from "react";
import css from "./TextInput.module.css";

export default function TextInput({ value, onType }) {
  //   const [inputValue, setInputValue] = useState("");
  const textInput = useId();

  return (
    <div className={css.conteiner}>
      <h2 className={css.title}>Input</h2>
      <label htmlFor={textInput}>Text input</label>
      <input
        type="text"
        id={textInput}
        value={value}
        onChange={(event) => onType(event.target.value)}
      />
      {/* <p>{inputValue}</p> */}
    </div>
  );
}
