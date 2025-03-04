import About from "@/pages/About/About";
import Main from "@/Layout/Main";
import LoginForm from "@/pages/Auth/Login";

import SignUpForm from "@/pages/Auth/Register";
import Home from "@/pages/Home";
import Product from "@/pages/product/Product";

import { createBrowserRouter } from "react-router";
import Contact from "@/pages/Contact/Contact";
import DashBoard from "@/Layout/DashBoard";
import DHome from "@/pages/DashBoard/home/Home";
import ProductDetails from "@/pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />, //layout
    children: [
      {
        path: "",
        element: <DHome />, //page
      },
    ],
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
]);

export default router;
