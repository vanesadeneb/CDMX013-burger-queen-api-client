import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Mesero from "../componentes/Mesero";
import ProductosBreakfast from '../componentes/ProductosDesayuno';
import ProductosComida from '../componentes/ProductosComida';

export const routerAuth = createBrowserRouter([
  {
    path: "/",
    element: <Mesero />,

    children: [
      {
        path: "/menuDesayuno",
        element: <ProductosBreakfast />,
      },
      {
        path: "/menuComida",
        element: <ProductosComida />,
      }
    ],
  }
]);