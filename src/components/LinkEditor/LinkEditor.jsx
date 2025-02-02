import TitleLink from "../TitleLink/TitleLink.jsx";
import { Formik, Form, Field } from "formik";
import css from "./LinkEditor.module.css";

export default function LinkEditor() {
  return (
    <div>
      <TitleLink text="Add new link" />
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <Field type="text" name="text" className={css.input} />
          <button type="submit" className={css.btn}>
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
}
