import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Mesero from "../componentes/Mesero";
import ProductosBreakfast from '../componentes/ProductosDesayuno';

export const routerAuth = createBrowserRouter([
    {
      path: "/pedidos",
      element: <Mesero />,
      
      children: [
        {
            path: "pedidos/menuDesayuno",
            element: <ProductosBreakfast />,
        }
      ],
    }
  ]);