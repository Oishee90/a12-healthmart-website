import {
    createBrowserRouter,
   } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Shared/Login";
import Register from "../Pages/Shared/Register";
import ErrorPage from "../ErrorPage/ErrorPage";
import UpdateProfile from "../Pages/Shared/UpdateProfile";
import CategoryDetails from "../Pages/Home/CategoryDetails";
import MedicineModal from "../Pages/Home/MedicineModal";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shop from "../Pages/Shop";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Cart";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import AdminRout from "./AdminRout";

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
          path: "/updateProfile",
          element:<UpdateProfile></UpdateProfile> ,
        },
        {
            path: "/login",
            element:<Login></Login> ,
          },
          {
            path: "/categories/:categoryName",
            element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
           
          },
          {
            path: "/sellermedicine/:id",
            element:<MedicineModal></MedicineModal>,
           
          },
          {
            path: "/register",
            element:<Register></Register> ,
          },
          {
            path: "/shop",
            element:<Shop></Shop> ,
          },
          {
            path: "/cart",
            element:<Cart></Cart> ,
          },
       
      ],
    },
    {
      path:'dashboard',
      element: <Dashboard></Dashboard>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        // admin routes
        {
          path: "manageUser",
          element:<AdminRout><ManageUser></ManageUser></AdminRout>,
        },
      ]
    

    }
  ]);

