import { createBrowserRouter } from "react-router-dom";
import CombineRoute from "../hoc/CombineRoute.jsx";
import LoginPage from "../pages/LoginPage/index.jsx";
import DashboardPage from "../pages/DashboardPage/index.jsx";
import RegisterPage from "../pages/RegisterPage/index.jsx";

const routesList = [
  {
    path: "/",
    element: <DashboardPage />,
    isProtected: true,
  },
  {
    path: "login",
    element: <LoginPage />,
    isProtected: false,
  },
  {
    path: "register",
    element: <RegisterPage />,
    isProtected: false,
  },
];

export const routes = createBrowserRouter(CombineRoute(routesList));
