import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Mesero from "../componentes/Mesero/Mesero";
import Admin from '../componentes/Administrador/Admin';
import Login from "../noauth/LogIn"

export const routerAuth = (usuario, rolAdmin, rolMesero, cambiarUsuario) => {
  if(rolMesero){
    return createBrowserRouter([
      {
         path: "/",
         element: <Mesero cambiarUsuario={cambiarUsuario} />,
       }
      ])
  }
  if(rolAdmin){
  return createBrowserRouter([
    {
      path: "/",
      element: <Admin cambiarUsuario={cambiarUsuario} />,
    }
  ]);
  }
    return createBrowserRouter([
      {
         path: "/",
         element: <Login cambiarUsuario={cambiarUsuario} />,
       }
      ])
}