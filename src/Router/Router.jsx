import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "./Error";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>, 
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/register', 
          element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;