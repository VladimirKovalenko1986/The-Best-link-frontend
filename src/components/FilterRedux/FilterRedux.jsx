import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTextFilter,
  changeTextFilter,
} from "../../redux/filtersSlice.js";

export default function FilterRedux() {
  const textFilter = useSelector(selectTextFilter);
  const dispatch = useDispatch();

  return (
    <Formik initialValues={{ text: textFilter }} enableReinitialize>
      {({ values, setFieldValue }) => (
        <Form>
          <h2>Filter by text</h2>
          <Field
            type="text"
            name="text"
            value={values.text}
            onChange={(e) => {
              setFieldValue("text", e.target.value);
              dispatch(changeTextFilter(e.target.value));
            }}
          />
        </Form>
      )}
    </Formik>
  );
}
