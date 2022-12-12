import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Mesero from "../componentes/Mesero/Mesero";
import ProductosBreakfast from '../componentes/Mesero/ProductosDesayuno';
import ProductosComida from '../componentes/Mesero/ProductosComida';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from '../componentes/LogIn';
import Admin from '../componentes/Administrador/Admin'
//import Login from '../componentes/LogIn';

export const routerAuth = createBrowserRouter([
  {
    path: "/",
    element: <LogIn />
  },
  {
    path: "/Mesero",
    element: <Mesero />,

    children: [
      {
        path: "/Mesero/menuDesayuno",
        element: <ProductosBreakfast />,
      },
      {
        path: "/Mesero/menuComida",
        element: <ProductosComida />,
      }

    ],
  },
  {
    path: "/Admin",
    element: <Admin />
  }
]);

/*  export const routerAuth = () =>  {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/mesero" element={<Mesero />} />
      </Routes>
    </BrowserRouter>
  );
} ;
 */