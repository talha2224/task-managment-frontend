import { useState } from "react";
import { createTask } from "../../api/task.service";

export default function TaskForm({ refresh }) {
  const [title, setTitle] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await createTask({ title });
    setTitle("");
    refresh();
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input value={title} onChange={e => setTitle(e.target.value)} className="flex-1 p-2 border rounded" placeholder="New task title" />
      <button className="bg-blue-600 text-white px-4 rounded">Add</button>
    </form>
  );
}
