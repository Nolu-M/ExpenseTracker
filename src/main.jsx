import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from './pages/Error';
import Main, { mainLoader } from './layouts/Main';
import { logoutAction } from './actions/logout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Expenses, { expensesAction, expensesLoader } from './pages/Expenses';
import Budget, { budgetAction, budgetLoader } from './pages/Budget';
import { deleteBudget } from './actions/deleteBudget';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error/>,
    children: [ 
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error/>,
      },
      {
        index: "budget/:id",
        element: <Budget />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error/>,
    children: [ 
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        index: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error/>,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);