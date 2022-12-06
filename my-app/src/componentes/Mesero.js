import React, { useState } from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
//import { ProductosBreakfast } from './ProductosDesayuno';
//import { Outlet } from 'react-router-dom';
import ProductosBreakfast from './ProductosDesayuno';
/* import ProductosComida from './ProductosComida'; */

const Mesero = () => {
    const [order, setOrder] = useState([]);

    const agregar = (producto) => {
        console.log("agregar", producto);
        const arr = [...order];
        const buscarProducto = order.find((item) => producto.id === item.product.id);
        if(buscarProducto === undefined){
            arr.push({qty:1, product:producto});
        }else{
            arr.push({...arr, qty: producto.qty+1, total: (producto.qty+1)*producto.price});
        }
        setOrder(arr);

    }

    return (
    <div>
        <Header
          text = { titulo.text}
           />
        <BotonesMesero/>
        <Pedido order={order}/>
        <ProductosBreakfast agregar={agregar}/>
        {/* <ProductosComida agregar={agregar}/> */}
    </div>
    );
}
export default Mesero;