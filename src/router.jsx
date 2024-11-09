import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AppLayout from "./AppLayout/AppLayout";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "pricing",
        element: <Pricing />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "singup",
        element: <SingUp />,
      },
    ],
  },
]);

export default router;
