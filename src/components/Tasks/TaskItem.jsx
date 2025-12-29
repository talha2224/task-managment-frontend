export default function TaskItem({ task, onDone, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white p-3 mb-2 rounded shadow">
      <div>
        <p className="font-semibold">{task.title}</p>
        <span className="text-sm text-gray-500">{task.status}</span>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onDone}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Done
        </button>
        <button
          onClick={onDelete}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
