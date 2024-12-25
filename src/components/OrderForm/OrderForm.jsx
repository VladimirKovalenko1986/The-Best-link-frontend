import { useId, useState } from "react";
import { FaTshirt } from "react-icons/fa";
import css from "./OrderForm.module.css";

export default function OrderForm({ onOrder }) {
  const [values, setValues] = useState({
    size: "md",
    color: "blue",
  });
  const sizeId = useId();
  const colorId = useId();

  //   const handleSize = (event) => {
  //     setValues({
  //       ...values,
  //       size: event.target.value,
  //     });
  //   };

  //   const handleColor = (event) => {
  //     setValues({
  //       ...values,
  //       color: event.target.value,
  //     });
  //   };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onOrder(values);

    setValues({
      size: "md",
      color: "blue",
    });
  };

  return (
    <div className={css.conteiner}>
      <h2 className={css.title}>Order Form</h2>
      <form
        autoComplete="off"
        noValidate
        className={css.form}
        onSubmit={handleSubmit}
      >
        {" "}
        <FaTshirt size="160" color={values.color} className={css.icon} />
        <label htmlFor={sizeId}>Size</label>
        <select
          name="size"
          id={sizeId}
          value={values.size}
          onChange={handleChange}
        >
          <option value="sm">Small</option>
          <option value="md">Medium</option>
          <option value="lg">Large</option>
        </select>
        <label htmlFor={colorId}>Color</label>
        <select
          name="color"
          id={colorId}
          value={values.color}
          onChange={handleChange}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
        <div className={css.conteinerBtn}>
          <button className={css.btn} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
