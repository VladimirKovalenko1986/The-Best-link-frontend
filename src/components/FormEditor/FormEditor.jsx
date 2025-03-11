import TitleLink from "../TitleLink/TitleLink.jsx";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  selectModalLinkId,
  selectLoadingEditLink,
  selectError,
} from "../../redux/links/selectors.js";
import RotatingSquareLoading from "../RotatingSquareLoading/RotatingSquareLoading.jsx";
import { editLink } from "../../redux/links/operations.js";
import { closeModal } from "../../redux/links/slice.js";
import * as Yup from "yup";
import { useId, useRef } from "react";
import css from "./FormEditor.module.css";

export default function FormEditor() {
  const loadingEdit = useSelector(selectLoadingEditLink);
  const error = useSelector(selectError);
  const id = useSelector(selectModalLinkId);
  const dispatch = useDispatch();
  const fileInputRef = useRef("");
  const handleClose = () => {
    dispatch(closeModal());
  };

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
    dispatch(editLink({ linkId: id, linkData: values }))
      .unwrap()
      .then(() => {
        toast.success("You have successfully edit link!");
        actions.resetForm();
        fileInputRef.current.value = "";
        handleClose();
      })
      .catch((err) => {
        toast.error(`Edite in not correct: ${err}`);
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
      <TitleLink text="Edite link" />
      {loadingEdit && <RotatingSquareLoading />}
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
              {loadingEdit ? "Editeng..." : "Edit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
