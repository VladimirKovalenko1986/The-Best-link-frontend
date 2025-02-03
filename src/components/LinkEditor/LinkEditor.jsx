import TitleLink from "../TitleLink/TitleLink.jsx";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./LinkEditor.module.css";

export default function LinkEditor() {
  const addLinkSchema = Yup.object().shape({
    nameType: Yup.string()
      .oneOf(["HTML&CSS", "JS", "React", "TS", "Node.js"])
      .required("Required"),

    link: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),

    nameLink: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),

    textLink: Yup.string()
      .min(5, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    nameType: "HTML&CSS",
    link: "",
    nameLink: "",
    textLink: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  const nameTypeId = useId();
  const linkId = useId();
  const nameLinkId = useId();
  const textLinkId = useId();

  return (
    <div className={css.conteiner}>
      <TitleLink text="Add new link" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addLinkSchema}
      >
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label} htmlFor={nameTypeId}>
              nameType:{" "}
            </label>
            <Field as="select" name="nameType" id={nameTypeId}>
              <option value="HTML&CSS">HTML&CSS</option>
              <option value="JS">JS</option>
              <option value="React">React</option>
              <option value="TS">TS</option>
              <option value="Node.js">Node.js</option>
            </Field>
          </div>

          <div className={css.wrapper}>
            <label className={css.label} htmlFor={linkId}>
              link:{" "}
            </label>
            <Field type="text" name="link" className={css.input} id={linkId} />
            <ErrorMessage name="link" component="span" className={css.error} />
          </div>

          <div className={css.wrapper}>
            <label className={css.label} htmlFor={nameLinkId}>
              nameLink:{" "}
            </label>
            <Field
              type="text"
              name="nameLink"
              className={css.input}
              id={nameLinkId}
            />
            <ErrorMessage
              name="nameLink"
              component="span"
              className={css.error}
            />
          </div>

          <div className={css.wrapper}>
            <label className={css.label} htmlFor={textLinkId}>
              textLink:{" "}
            </label>
            <Field
              type="text"
              name="textLink"
              className={css.input}
              id={textLinkId}
            />
            <ErrorMessage
              name="textLink"
              component="span"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.btn}>
            Add Link
          </button>
        </Form>
      </Formik>
    </div>
  );
}
