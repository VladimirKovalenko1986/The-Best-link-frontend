import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./UserFormFormik.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .trim()
    .min(3, "Min 3 charts!!!")
    .required("Is required!!!"),
  email: Yup.string()
    .trim()
    .email("Must be a valid email!!!")
    .required("Is required!!!"),
  role: Yup.string()
    .oneOf(["guest", "user", "admin"])
    .required("Is required!!!"),
  comment: Yup.string()
    .max(256, "Max 256 chars!!!!")
    .required("Is required!!!"),
});

export default function UserFormFormik({ onAdd }) {
  const usernameId = useId();
  const roleId = useId();
  const emailId = useId();
  const commentId = useId();

  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        role: "guest",
        comment: "Default comment value",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue }) => (
        <div className={css.conteiner}>
          <h2 className={css.title}>Form Formik</h2>
          <Form className={css.form}>
            <div className={css.group}>
              <label htmlFor={usernameId}>UserName:</label>
              <Field
                name="username"
                id={usernameId}
                onBlur={(e) => setFieldValue("username", e.target.value.trim())}
              />
              <ErrorMessage
                className={css.error}
                name="username"
                component="span"
              />
            </div>

            <div className={css.group}>
              <label htmlFor={emailId}>Email:</label>
              <Field
                type="email"
                id={emailId}
                name="email"
                onBlur={(e) => setFieldValue("email", e.target.value.trim())}
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </div>

            <div className={css.group}>
              <label htmlFor={roleId}>Role:</label>
              <Field as="select" name="role" id={roleId}>
                <option value="guest">Guest</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Field>
              <ErrorMessage
                className={css.error}
                name="role"
                component="span"
              />
            </div>

            <div className={css.group}>
              <label htmlFor={commentId}>Comment:</label>
              <Field
                as="textarea"
                name="comment"
                id={commentId}
                onBlur={(e) => setFieldValue("comment", e.target.value.trim())}
              />
              <ErrorMessage
                className={css.error}
                name="comment"
                component="span"
              />
            </div>

            <button className={css.btn} type="submit">
              Submit
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
