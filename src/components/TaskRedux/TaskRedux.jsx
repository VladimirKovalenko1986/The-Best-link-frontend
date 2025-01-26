import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/taskOps.js";

export default function TaskRedux({ task }) {
  const dispatch = useDispatch();
  return (
    <div>
      <p>{task.text}</p>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
}
