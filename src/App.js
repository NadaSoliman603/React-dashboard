
import DashboardContent from "./dashboardLayout"
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import routes from "./router/router";

export default function Dashboard() {
  const router = createBrowserRouter(routes)
  return<RouterProvider router={router} />
}

