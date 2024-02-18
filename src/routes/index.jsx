import { createBrowserRouter } from "react-router-dom";
import CombineRoute from "../hoc/CombineRoute.jsx";
import LoginPage from "../pages/LoginPage/index.jsx";
import DashboardPage from "../pages/DashboardPage/index.jsx";
import RegisterPage from "../pages/RegisterPage/index.jsx";
import Homepage from "../pages/HomePage/index.jsx";
import MenusPage from "../pages/MenusPage/index.jsx";
import ListMenu from "../pages/MenusPage/ListMenu/index.jsx";
import FilterBeverage from "../pages/MenusPage/FilterBeverage/index.jsx";
import FilterMainDish from "../pages/MenusPage/FilterMainDish/index.jsx";
// import AuthRoute from "../hoc/AuthRoute.jsx";
// import ProtectedRoute from "../hoc/ProtectedRoute.jsx";

const routesList = [
  {
    path: "/",
    element: <Homepage />,
    isProtected: true,
    children: [
      { path: "dashboard", element: <DashboardPage /> },
      {
        path: "menus",
        element: <MenusPage />,
        children: [
          { path: "", element: <ListMenu /> },
          { path: "beverage", element: <FilterBeverage /> },
          { path: "main-dish", element: <FilterMainDish /> },
        ],
      },
    ],
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

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <ProtectedRoute>
//         <Homepage />
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         path: "dashboard",
//         element: (
//           <ProtectedRoute>
//             <DashboardPage />
//           </ProtectedRoute>
//         ),
//       },
//     ],
//   },

//   {
//     path: "login",
//     element: (
//       <AuthRoute>
//         <LoginPage />
//       </AuthRoute>
//     ),
//   },
// ]);

// export const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//     children: [
//       {
//         path: "dashboard",
//         element: <DashboardPage />,
//       },
//     ],
//   },

//   {
//     path: "login",
//     element: <LoginPage />,
//   },
// ]);
