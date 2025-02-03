import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const userSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const emailId = useId();
  const passwordId = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.conteiner}>
          <label className={css.label} htmlFor={emailId}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailId}
            autoComplete="off"
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </div>

        <div className={css.conteiner}>
          <label className={css.label} htmlFor={passwordId}>
            password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordId}
            autoComplete="off"
          />
          <ErrorMessage
            name="password"
            component="span"
            className={css.error}
          />
        </div>

        <button type="submit" className={css.btn}>
          Sign in user
        </button>
      </Form>
    </Formik>
  );
}
