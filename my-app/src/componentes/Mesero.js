import React, { useState } from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
//import { Outlet } from 'react-router-dom';
import ProductosBreakfast from './ProductosDesayuno';
/* import ProductosComida from './ProductosComida'; */

const Mesero = () => {
    const [order, setOrder] = useState([]);

    const agregar = (producto) => {
        const arr = [...order];
        const buscarProducto = order.find((item) => producto.id === item.product.id);

        if(buscarProducto === undefined){
            arr.push({qty:1, product:producto, precio: producto.price});
        }else{
            order.map((x)=>{
                if(x.product.id === producto.id){    
                    x.qty = x.qty+1
                    x.precio = (x.qty) * producto.price
                }
            });
        }
        setOrder(arr);
    }

    return (
    <div>
        <Header
          text = {titulo[0].text}
           />
        <BotonesMesero />
        <Pedido order={order} agregar={agregar}/>
        <ProductosBreakfast agregar={agregar}/>
    </div>
    );
}
export default Mesero;