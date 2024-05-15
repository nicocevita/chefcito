import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
