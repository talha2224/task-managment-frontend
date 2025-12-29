import api from "./axios";
import toast from "react-hot-toast";

export const getTasks = async () => {
  try {
    const res = await api.get("/tasks");
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createTask = async (data) => {
  const loading = toast.loading("Creating task...");
  try {
    const res = await api.post("/tasks", data);
    toast.success("Task created successfully!");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to create task!");
    throw error;
  } finally {
    toast.dismiss(loading);
  }
};

export const updateTask = async (id, status) => {
  const loading = toast.loading("Updating task...");
  try {
    const res = await api.put(`/tasks/${id}`, { status });
    toast.success("Task updated successfully!");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to update task!");
    throw error;
  } finally {
    toast.dismiss(loading);
  }
};

export const deleteTask = async (id) => {
  const loading = toast.loading("Deleting task...");
  try {
    const res = await api.delete(`/tasks/${id}`);
    toast.success("Task deleted successfully!");
    return res.data;
  } catch (error) {
    toast.error(error?.response?.data?.message || "Failed to delete task!");
    throw error;
  } finally {
    toast.dismiss(loading);
  }
};
