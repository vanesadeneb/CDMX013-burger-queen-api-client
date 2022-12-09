import React, { useState, useEffect } from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
//import { Outlet } from 'react-router-dom';
import ProductosBreakfast from './ProductosDesayuno';
/* import ProductosComida from './ProductosComida'; producto*/

const Mesero = () => {
    const [order, setOrder] = useState([]);
    const[total, setTotal] = useState(0);
    const [productos, setProductos] = useState(null);
    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/Products')
            .then(response => response.json())
            .then(productosDesayuno => setProductos(productosDesayuno))
    }, [])

    const agregar = (producto) => {
        const arr = [...order];
        const buscarProducto = order.find((item) => producto.id === item.product.id);

        if(buscarProducto === undefined){
            arr.push({qty:1, product:producto, precio: producto.price});
        }else{
            order.map((x)=>{
                if(x.product.id === producto.id){    
                    x.qty = x.qty+1;
                    x.precio = x.qty * producto.price;
                }
            });
        }
        setOrder(arr);
    }

    

    const totalPedido = () => {
        let suma = 0;
        for(let i = 0; i < order.length; i++){
            suma += order[i].precio; 
        }
        setTotal(suma);
    } 

    return (
    <div>
        <Header
          text = {titulo[0].text}
           />
        <BotonesMesero />
        <Pedido order={order} agregar={agregar} productos={productos}/>
        <ProductosBreakfast agregar={agregar} totalPedido={totalPedido} productos={productos}/>
    </div>
    );
}
export default Mesero;