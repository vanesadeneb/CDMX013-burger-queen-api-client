import React from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
//import { ProductosBreakfast } from './ProductosDesayuno';
import { Outlet } from 'react-router-dom';
import ProductosBreakfast from './ProductosDesayuno';
//

const Mesero = () => {
    return (
    <div>
        <Header
          text = { titulo.text}
           />
        <BotonesMesero/>
        <Pedido/>
        <Outlet />
    </div>
    );
}
export default Mesero;