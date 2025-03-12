import TitleLink from "../TitleLink/TitleLink.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { addLink } from "../../redux/links/operations.js";
import {
  selectLoadingAddLink,
  selectError,
} from "../../redux/links/selectors.js";
import FidgetSpinnerLoading from "../FidgetSpinnerLoading/FidgetSpinnerLoading.jsx";
import * as Yup from "yup";
import { useId, useRef } from "react";
import css from "./LinkEditor.module.css";

export default function LinkEditor() {
  const loadingAddLink = useSelector(selectLoadingAddLink);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const fileInputRef = useRef("");

  const addLinkSchema = Yup.object().shape({
    nameType: Yup.string()
      .oneOf(["HTML&CSS", "JS", "React", "TS", "Node.js"])
      .required("Required"),

    link: Yup.string()
      .min(5, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),

    nameLink: Yup.string()
      .min(5, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),

    textLink: Yup.string()
      .min(5, "Too Short!")
      .max(200, "Too Long!")
      .required("Required"),

    poster: Yup.string().notRequired(),
  });

  const initialValues = {
    nameType: "HTML&CSS",
    link: "",
    nameLink: "",
    textLink: "",
    poster: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addLink(values))
      .unwrap()
      .then(() => {
        toast.success("Add new link!");
        actions.resetForm();
      })
      .catch((err) => {
        toast.error(`Link not add: ${err}`);
      });
    actions.resetForm();
  };

  const nameTypeId = useId();
  const linkId = useId();
  const nameLinkId = useId();
  const textLinkId = useId();
  const posterId = useId();

  return (
    <div className={css.conteiner}>
      {loadingAddLink && <FidgetSpinnerLoading />}
      <TitleLink text="Add new link" />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={addLinkSchema}
      >
        {({ setFieldValue }) => (
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
              <Field
                type="text"
                name="link"
                className={css.input}
                id={linkId}
              />
              <ErrorMessage
                name="link"
                component="span"
                className={css.error}
              />
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

            <div className={css.wrapper}>
              <label className={css.label} htmlFor={posterId}>
                Photo
              </label>
              <input
                id={posterId}
                name="poster"
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(event) => {
                  const file = event.currentTarget.files[0];
                  setFieldValue("poster", file);
                }}
              />
            </div>
            {error && (
              <p className={css.error}>
                Ooops! There was an error! Please reload!
              </p>
            )}

            <button type="submit" className={css.btn}>
              {loadingAddLink ? "Ading..." : "Add Link"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
