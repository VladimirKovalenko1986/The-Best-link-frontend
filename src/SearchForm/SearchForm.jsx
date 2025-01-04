import { Field, Form, Formik } from "formik";
import css from "./SearchForm.module.css";

export default function SearchForm({ onSearch }) {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(value, actions) => {
        onSearch(value.query);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
}
