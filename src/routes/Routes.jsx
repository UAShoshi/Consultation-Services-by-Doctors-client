
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddServices from "../pages/AddServices";
import Error from "../pages/Error";
import PrivateRoute from "./PrivateRoute";
import AllServices from "../pages/AllServices";
import ServicesDetail from "../pages/ServicesDetail";
import UpdateServices from "../pages/UpdateServices";
import ManageServices from "../pages/ManageServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <AllServices></AllServices>,
        loader: () => fetch('https://consultation-services-by-doctors-server.vercel.app/allServices')
      },
      {
        path: "/services/:id",
        element: <PrivateRoute><ServicesDetail></ServicesDetail></PrivateRoute>
      },
      {
        path: "/addServices/:id",
        element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
        loader: ({params}) => fetch(`https://consultation-services-by-doctors-server.vercel.app/manageServices/${params.id}`)
      },
      {
        path: "/updateServices/:id",
        element: <PrivateRoute><UpdateServices></UpdateServices></PrivateRoute>,
        loader: ({params}) => fetch(`https://consultation-services-by-doctors-server.vercel.app/manageServices/${params.id}`)
      },
      {
        path: "/manageService",
        element: <PrivateRoute><ManageServices></ManageServices></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);



export default router;


