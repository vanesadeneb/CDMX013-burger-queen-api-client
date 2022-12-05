import React, { useState } from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
//import { ProductosBreakfast } from './ProductosDesayuno';
import { Outlet } from 'react-router-dom';
import ProductosBreakfast from './ProductosDesayuno';


const Mesero = () => {
    const [order, setOrder] = useState([]);

    const agregar = (producto) => {
        const arr = []
        const buscarProducto = order.find((item) => producto.id === item.product.id);
        if(buscarProducto === undefined){
            arr.push({qty:1, product:producto});
            setOrder(arr);
        }else{
            arr.push({...producto, qty: producto.qty+1, total: (producto.qty+1)*producto.precio});
        }

    }

    return (
    <div>
        <Header
          text = { titulo.text}
           />
        <BotonesMesero/>
        <Pedido order={order}/>
        <ProductosBreakfast agregar={agregar}/>
    </div>
    );
}
export default Mesero;