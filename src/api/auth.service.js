import api from "./axios";
import toast from "react-hot-toast";

export const login = async (data) => {
    const loading = toast.loading("Logging in...");
    try {
        const res = await api.post("/auth/login", data);
        toast.success("Login successful!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Login failed!");
        throw error;
    } finally {
        toast.dismiss(loading);
    }
};

export const register = async (data) => {
    const loading = toast.loading("Creating account...");
    try {
        const res = await api.post("/auth/register", data);
        toast.success("Account created successfully!");
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "Registration failed!");
        throw error;
    } finally {
        toast.dismiss(loading);
    }
};
