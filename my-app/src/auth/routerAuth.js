import Mesero from "../componentes/Mesero"
import {
    createBrowserRouter,
  } from "react-router-dom";
  

export const routerAuth = createBrowserRouter([
    {
      path: "/",
      element: <Mesero />,
    },
  ]);