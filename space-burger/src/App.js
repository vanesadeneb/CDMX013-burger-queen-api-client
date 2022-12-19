
import React, { useEffect } from 'react';
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routerNoAuth } from './noauth/routerNoAuth';
import { routerAuth } from './auth/routerAuth';

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [rolAdmin, setRolAdmin] = useState(null);
  const [rolMesero, setMesero] = useState(null);

  const cambiarUsuario = (email, rolAdmin, rolMesero) => {
    setUsuario(email);
    setRolAdmin(rolAdmin);
    setMesero(rolMesero);
    console.log("admin",rolAdmin);
  };

  useEffect(() => {
    // Obteniendo valor guardado
    const guardado = localStorage.getItem("credenciales");
    const valorInicial = JSON.parse(guardado);
    setUsuario(valorInicial || null);
  },[]);

  return (
    <div>
      {usuario
        ? <RouterProvider router={routerAuth(usuario, rolAdmin, rolMesero, cambiarUsuario)}/>
        : <RouterProvider router={routerNoAuth(cambiarUsuario)}/>
      }
    </div>
  );
}