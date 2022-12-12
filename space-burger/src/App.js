
import React from 'react';
import { useState } from "react";
import { RouterProvider } from "react-router-dom";
//import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { routerNoAuth } from './noauth/routerNoAuth';
import { routerAuth } from './auth/routerAuth';
//import Login from './componentes/LogIn';
//import Mesero from './componentes/Mesero';

export default function App() {
  const [user, setUsuario] = useState(() => {
    // Obteniendo valor guardado
    const guardado = localStorage.getItem("credenciales");
    const valorInicial = JSON.parse(guardado);
    return valorInicial || null;
  });

  return (
    <div>
      {user
        ? <RouterProvider router={routerAuth} />
        : <RouterProvider router={routerNoAuth} />
      }
    </div>
    /*
    <Router>
        <Routes>
          <Route path="/pedidos" element={<Mesero />} />
          <Route path="/" element={<Login />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
    </Router>*/
  );
}