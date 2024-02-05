import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/index.jsx";
import DashboardPage from "../pages/DashboardPage/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);
