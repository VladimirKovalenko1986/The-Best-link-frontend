import { useSelector } from "react-redux";
import TaskRedux from "../TaskRedux/TaskRedux.jsx";

export default function TaskListRedux() {
  const tasks = useSelector((state) => state.tasks.items);
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
