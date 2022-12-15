import React, { useState, useEffect } from 'react';
import {Header, titulo} from '../Header';
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
import ProductosBreakfast from './ProductosDesayuno';
import ProductosComida from './ProductosComida';

const Mesero = () => {
    const [order, setOrder] = useState([]);
    const [productos, setProductos] = useState(null);
    const [menu, setMenu] = useState("desayuno");

    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/Products')
            .then(response => response.json())
            .then(productosDesayuno => setProductos(productosDesayuno))
    }, [])

    const cambiarMenu = (e) => {
        if (e.target.value === "desayuno") {
            setMenu("desayuno");
        }
        if (e.target.value === "comida") {
            setMenu("comida");
        }
    }

    const agregar = (producto) => {
        if (!order.find((element) => element.product.id === producto.id)) {
            const updatedOrder = [...order, { product: producto, qty: 1, precio: producto.price }];
            setOrder(updatedOrder);
        }else{
            setOrder(
                order.map((element) =>
                  element.product.id === producto.id
                    ? { ...element, qty: element.qty + 1, precio: (element.qty+1) * producto.price }
                    : element
                )
            )
        }
    }

    const eliminar = (producto) =>{
        const filtrarProducto = order.filter(
            (element) => element.product.id !== producto.id
        );
        setOrder(filtrarProducto);
    }

    const restar = (producto) => {
        setOrder(
            order.map((element) =>{
                return element.product.id === producto.id
                ? { ...element, qty: element.qty - 1, precio: (element.qty-1) * producto.price}
                : element
            })
        )
    }
     
    const formatearOrden = () => {
        setOrder([]);
    };

    return (
    <div>
        <Header
          text = {titulo[0].text}
           />
        <BotonesMesero cambiarMenu={cambiarMenu}/>
        <Pedido order={order} agregar={agregar} restar={restar} eliminar={eliminar} formatearOrden={formatearOrden}/>
        {menu === "desayuno" 
            ? <ProductosBreakfast agregar={agregar} productos={productos}/>
            : <ProductosComida agregar={agregar} productos={productos}/>
        }
        
    </div>
    );
}
export default Mesero;