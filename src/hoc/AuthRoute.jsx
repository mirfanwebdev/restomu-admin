import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function AuthRoute({ children }) {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Navigate to="/" />;
  }
  return <>{children || <Outlet />}</>;
}
