import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    photo: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const userNameId = useId();
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
          <label className={css.label} htmlFor={userNameId}>
            userName
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={userNameId}
            autoComplete="off"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

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
          Registration user
        </button>
      </Form>
    </Formik>
  );
}
