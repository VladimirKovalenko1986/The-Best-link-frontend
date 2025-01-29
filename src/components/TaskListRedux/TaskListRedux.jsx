import { useSelector } from "react-redux";
import TaskRedux from "../TaskRedux/TaskRedux.jsx";
import { selectVisibleTasks } from "../../redux/tasksSlice.js";

export default function TaskListRedux() {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskRedux task={task} />
        </li>
      ))}
    </ul>
  );
}
