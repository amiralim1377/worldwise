import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AppLayout from "./AppLayout/AppLayout";
import Pricing from "./Pages/Pricing/Pricing";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import SingUp from "./Pages/SingUp/SingUp";
import App from "./Pages/Application/Application ";
import Countries from "./Components/Countries/Countries";
import CitiesItem from "./Components/CitiesItem/CitiesItem";
import Form from "./Components/Form/Form";
import Application from "./Pages/Application/Application ";

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
      {
        path: "app",
        element: <Application />,
        children: [
          {
            path: "cities",
            element: <CitiesItem />,
          },
          {
            path: "/app",
            element: <CitiesItem />,
          },
          {
            path: "countries",
            element: <Countries />,
          },
          {
            path: "form",
            element: <Form />,
          },
        ],
      },
    ],
  },
]);

export default router;
