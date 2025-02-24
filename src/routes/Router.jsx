import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayoute from "../layout/MainLayoute";
import Home from "../layout/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRoute from "../privateroutes/PrivateRoute"
import Profiler from "../privateroutes/Profile"
import ServiceDetails from "../pages/ServiceDetails";
import ServiceD from "../pages/ServiceD";
import Profile from "../privateroutes/Profile";
import CareerPlanner from "../pages/CareerPlanner";
import Reset from "../pages/Reset";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><MainLayoute/></div>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>,
        loader: () => fetch('/services.json')
      },
      {
        path: '/login',
        element: <Login/>,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: 'profile',
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: 'serviceDetails/:id',
        element: <PrivateRoute><ServiceDetails/></PrivateRoute>,
        loader: () => fetch('/services.json')
      },
      {
        path: 'careerplanner',
        element: <PrivateRoute><CareerPlanner/></PrivateRoute>,
      },
      {
        path: 'resetpassword',
        element: <Reset/>,
      }
    ]
  },
]);
export default router

