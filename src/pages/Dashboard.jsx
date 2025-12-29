import TaskList from "../components/Tasks/TaskList";
import TaskForm from "../components/Tasks/TaskForm";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout } = useAuth();
  return (
    <div className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Task Manager
      </h1>
      <button onClick={logout}>Logout</button>
      <TaskForm />
      <TaskList />
    </div>
  );
}
