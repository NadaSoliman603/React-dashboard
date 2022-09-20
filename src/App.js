
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import routes from "./router/router";

export default function App() {
  const router = createBrowserRouter(routes)
  return<RouterProvider router={router} />
}

