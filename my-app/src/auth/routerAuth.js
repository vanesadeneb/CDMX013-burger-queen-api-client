import React from 'react';
  import {
  createBrowserRouter,
} from "react-router-dom";  
import Mesero from "../componentes/Mesero";
 import ProductosBreakfast from '../componentes/ProductosDesayuno';
import ProductosComida from '../componentes/ProductosComida'; 
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from '../componentes/LogIn';
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