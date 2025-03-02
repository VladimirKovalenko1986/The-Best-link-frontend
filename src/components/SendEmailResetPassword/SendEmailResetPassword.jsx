import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import css from "./SedEmailResetPassword.module.css";
import { selectLoading } from "../../redux/auth/selector.js";
import { sendEmailResetPassword } from "../../redux/auth/operations.js";

export default function SendEmailResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const emailSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
  });

  const initialValues = {
    email: "",
  };

  const emailId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(sendEmailResetPassword({ email: values.email }))
      .unwrap()
      .then(() => {
        toast.success("On the your mail send message from reset password!");
        actions.resetForm();
      })
      .catch((err) => {
        toast.error(`A registration error has occurred: ${err}`);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={emailSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={css.conteiner}>
            <label className={css.label} htmlFor={emailId}>
              Email
            </label>
            <div>
              <Field
                className={css.input}
                name="email"
                type="email"
                id={emailId}
              />
              <button
                className={css.btn}
                type="submit"
                disabled={loading || isSubmitting}
              >
                {loading ? "Sending..." : "Send"}
              </button>
              <ErrorMessage
                className={css.error}
                name="email"
                component="div"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
