import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Login from "../componentes/LogIn";
import ErrorPage from "../error-page";

export const routerNoAuth = (setUsuario) => createBrowserRouter([
    {
      path: "/",
      element: <Login setUsuario={setUsuario}/>,
      errorElement: <ErrorPage />
    }
  ]);