import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "./Error";
import Home from "../pages/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import JobDetails from "../pages/JobDetails";
import PrivateRouter from "./PrivateRouter";


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
          path: '/jobs/:id', 
          element: <PrivateRouter><JobDetails></JobDetails></PrivateRouter>, 
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/register', 
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>,
        }
      ]
    },
  ]);

  export default router;