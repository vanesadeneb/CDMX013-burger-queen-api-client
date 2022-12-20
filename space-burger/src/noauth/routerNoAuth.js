import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../noauth/LogIn";
import ErrorPage from "../error-page";

export const routerNoAuth = (cambiarUsuario) => createBrowserRouter([
    {
      path: "/",
      element: <Login cambiarUsuario={cambiarUsuario}/>,
      errorElement: <ErrorPage />
    }
  ]);