import {
    createBrowserRouter,
   } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import ErrorPage from "../ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element:<Home></Home> ,
        },
        {
            path: "/login",
            element:<Login></Login> ,
          },
          {
            path: "/register",
            element:<Register></Register> ,
          },
      ],
    },
  ]);

