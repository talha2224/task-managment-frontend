import api from "./axios";

export const getTasks = () => api.get("/tasks");
export const createTask = (data) => api.post("/tasks", data);
export const updateTask = (id, status) =>
  api.put(`/tasks/${id}`, { status });
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
