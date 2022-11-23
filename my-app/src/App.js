import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './componentes/LogIn';
import Mesero from './componentes/Mesero';

export default function App() {
  return (
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
    </Router>
  );
}