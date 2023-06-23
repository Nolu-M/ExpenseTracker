import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Navbar from './components/Navbar';
import Budget from './pages/Budget';
import Expenses from './pages/Expenses';
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
        element: <Dashboard />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/budget",
        element: <Budget />,
      },
      {
        path: "/expenses",
        element: <Expenses />,
      },
]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);