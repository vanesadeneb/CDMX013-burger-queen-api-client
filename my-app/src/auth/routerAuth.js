import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mesero from "../componentes/Mesero";
import Admin from '../componentes/Admin';

export const routerAuth = createBrowserRouter([
    {
      path: "/pedidos",
      element: <Mesero />,
      /*
      children: [
        {
            path: "/usuarios",
            element: <Usuarios />,
        }
      ]*/
    },
    {
      path : "/admin",
      element : <Admin />,
    }
    
  ]);