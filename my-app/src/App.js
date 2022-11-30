import React, { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import { routerNoAuth } from './noauth/routerNoAuth';
import { routerAuth } from './auth/routerAuth';

export default function App() {
  //const credencial = localStorage.getItem('correo');
  //console.log(credencial);
  const [usuario, setUsuario] = useState(() => {
    // Obteniendo valor guardado
    const guardado = localStorage.getItem("credenciales");
    const valorInicial = JSON.parse(guardado);
    return valorInicial || null;
  });
  console.log(usuario);
  return (
    <div>
      {usuario
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