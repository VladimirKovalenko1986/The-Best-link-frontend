import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useId, useRef } from "react";
import css from "./RegistrationForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations.js";

export default function RegistrationForm() {
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const fileInputRef = useRef("");
  // const navigate = useNavigate();

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
    photo: Yup.string().notRequired(),
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    photo: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("You have successfully registered!");
        actions.resetForm();
        fileInputRef.current.value = "";
        // navigate("/login");
      })
      .catch((err) => {
        toast.error(`A registration error has occurred: ${err}`);
      });
  };

  const userNameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const photoId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      {/* Використовуємо render props для поля фото */}
      {({ setFieldValue }) => (
        <Form className={css.form}>
          {/* Name */}
          <div className={css.conteiner}>
            <label className={css.label} htmlFor={userNameId}>
              Name
            </label>
            <Field
              className={css.input}
              id={userNameId}
              name="name"
              type="text"
            />
            <ErrorMessage className={css.error} name="name" component="div" />
          </div>
          {/* Email */}
          <div className={css.conteiner}>
            <label className={css.label} htmlFor={emailId}>
              Email
            </label>
            <Field
              className={css.input}
              id={emailId}
              name="email"
              type="email"
            />
            <ErrorMessage className={css.error} name="email" component="div" />
          </div>
          {/* Password */}
          <div className={css.conteiner}>
            <label className={css.label} htmlFor={passwordId}>
              Password
            </label>
            <Field
              className={css.input}
              id={passwordId}
              name="password"
              type="password"
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="div"
            />
          </div>
          {/* Photo (файл) */}
          <div className={css.conteiner}>
            <label className={css.label} htmlFor={photoId}>
              Photo
            </label>
            <input
              id={photoId}
              name="photo"
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={(event) => {
                const file = event.currentTarget.files[0];
                setFieldValue("photo", file);
              }}
            />
          </div>
          {error && (
            <p className={css.error}>
              Ooops! There was an error! Please reload!
            </p>
          )}
          <button className={css.btn} type="submit">
            {loading ? "Registering..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
