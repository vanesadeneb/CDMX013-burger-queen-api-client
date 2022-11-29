import LogInNa from "./LoginNa";
import {
    createBrowserRouter,
  } from "react-router-dom";

export const routerNoAuth = createBrowserRouter([
    {
      path: "/",
      element: <LogInNa />,
    },
  ]);