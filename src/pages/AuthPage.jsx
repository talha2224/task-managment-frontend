import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export default function AuthPage({ type }) {
  return type === "login" ? <Login /> : <Register />;
}
