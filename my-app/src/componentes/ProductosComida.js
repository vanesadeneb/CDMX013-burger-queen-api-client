import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Platillos from './Platillos'; 


export const ProductosComida = ({agregar}) => {
    const [productos, setProductos] = useState(null);
    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/Products')
            .then(response => response.json())
            .then(productosDesayuno => setProductos(productosDesayuno))
    }, [])
    return (
        <div className='container-productos'>
            {productos && productos.map(producto =>{
                //console.log("producto desayuno:",producto);
                if(producto.type === "comida"){
                    return <Platillos producto={producto} key={producto.id} agregar={agregar}/>

                }
            })
        } 
        </div>
        
    );
}

/* export const productos = {
    imagen: 'https://images.hola.com/imagenes/cocina/recetas/20210208183946/sandwich-jamon-queso/1-72-559/sandwich-havar-adob-t.jpg',
    nombre: 'Sandwich de jamon y queso',
    precio: '$50'
} */

export default ProductosComida;