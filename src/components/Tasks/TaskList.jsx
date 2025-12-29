import { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "../../api/task.service";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const load = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <>
      <TaskForm refresh={load} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDone={() => updateTask(task.id, "done").then(load)}
          onDelete={() => deleteTask(task.id).then(load)}
        />
      ))}
    </>
  );
}
