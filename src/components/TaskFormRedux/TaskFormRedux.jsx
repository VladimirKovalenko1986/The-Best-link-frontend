import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/taskOps.js";

export default function TaskFormRedux() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addTask(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ text: "" }} onSubmit={handleSubmit}>
      <Form>
        <Field name="text" placeholder="Enter task text..." />
        <button type="submit">Add task</button>
      </Form>
    </Formik>
  );
}
