import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Mesero from "../componentes/Mesero/Mesero";
import Admin from '../componentes/Administrador/Admin';

export const routerAuth = (usuario, rolAdmin, rolMesero, cambiarUsuario) => {
if (rolAdmin === false) {
  if(rolMesero){
    return createBrowserRouter([
      {
         path: "/",
         element: <Mesero usuario={usuario} cambiarUsuario={cambiarUsuario} />,
       }
      ])
  }else{
    return console.log("no entro a componente mesero!");
  }
} else {
  return createBrowserRouter([
    {
      path: "/",
      element: <Admin usuario={usuario} cambiarUsuario={cambiarUsuario} />,
    }
  ]);
};
}


/*
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
]);*/

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