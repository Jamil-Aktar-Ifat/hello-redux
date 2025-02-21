import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";
import Login from "../pages/login";
import Tasks from "../pages/Tasks";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        index: true,
        element: <Tasks></Tasks>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default routes;
