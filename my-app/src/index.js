import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//import Login from './componentes/LogIn.js'
import {Header, titulo} from './componentes/Header.js'
import BotonesMesero from './componentes/BotonesMesero';
import Pedido from './componentes/Pedidos'
import { ProductosBreakfast, productos } from './componentes/ProductosDesayuno';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header
      text = { titulo.text}
       />
    <BotonesMesero/>
    <ProductosBreakfast
      imagen={productos.imagen}
      nombre={productos.nombre}
      precio={productos.precio}
      />
  
    <Pedido/>
   
    {/*
      <Login/>

      <Header
      text = { titulo.text}
       />
    
    <Header
      text = { titulo.text= "otro texto"}
    /> */}

  </React.StrictMode>
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
