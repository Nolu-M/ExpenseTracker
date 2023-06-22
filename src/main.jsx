import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from './pages/Home';
import Services from './pages/Services';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';
import Budget from './pages/Budget';
import "./index.css";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/budget",
        element: <Budget />,
      },
]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);