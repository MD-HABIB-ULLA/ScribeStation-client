import Main from "@/Layout/Main";
import LoginForm from "@/pages/Auth/Login";

import SignUpForm from "@/pages/Auth/Register";
import Home from "@/pages/Home";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,

    children: [
      {
        path: "/",
        element: <Home />,
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
