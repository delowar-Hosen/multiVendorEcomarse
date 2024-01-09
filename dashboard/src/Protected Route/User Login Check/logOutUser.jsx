import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../../Components/Login";

export default function logOutUser() {
  const user = useSelector((state) => state.user.value);

  return user ? <Outlet /> : <Login />;
}
