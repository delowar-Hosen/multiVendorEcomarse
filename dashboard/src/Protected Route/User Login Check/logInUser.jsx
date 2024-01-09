import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function logInUser() {
  const user = useSelector((state) => state.user.value);

  return user ? <Navigate to="/"/> : <Outlet />;
}
