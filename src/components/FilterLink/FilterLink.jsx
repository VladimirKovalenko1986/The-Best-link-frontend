import { Formik, Form, Field } from "formik";
import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilter,
  selectLoadingDeleteLink,
} from "../../redux/links/selectors.js";
import { setFilter } from "../../redux/links/slice.js";
import { fetchLinks } from "../../redux/links/operations.js";
import RevolvingDotLoading from "../RevolvingDotLoading/RevolvingDotLoading.jsx";
import css from "./FilterLink.module.css";

export default function FilterLink() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const loadingDeleteLink = useSelector(selectLoadingDeleteLink);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    dispatch(setFilter(value));
    dispatch(fetchLinks({ page: 1, limit: 10, filter: value }));
  };

  const nameTypeId = useId();
  return (
    <div>
      {loadingDeleteLink && <RevolvingDotLoading />}
      <Formik>
        <Form className={css.form}>
          <label className={css.label}>Filter NameType</label>
          <Field
            className={css.input}
            as="select"
            name="nameType"
            id={nameTypeId}
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="HTML&CSS">HTML&CSS</option>
            <option value="JS">JS</option>
            <option value="React">React</option>
            <option value="TS">TS</option>
            <option value="Node.js">Node.js</option>
          </Field>
        </Form>
      </Formik>
    </div>
  );
}
