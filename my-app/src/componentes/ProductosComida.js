import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Platillos from './Platillos'; 


export const ProductosComida = (props) => {
    const [productos, setProductos] = useState(null);
    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/COMIDA')
            .then(response => response.json())
            .then(productosDesayuno => setProductos(productosDesayuno))
    }, [])
    return (
        <div className='container-productos'>
            {productos && productos.map(producto => <Platillos producto={producto} key={producto.Producto}/>)}
        </div>
        
    );
}

/* export const productos = {
    imagen: 'https://images.hola.com/imagenes/cocina/recetas/20210208183946/sandwich-jamon-queso/1-72-559/sandwich-havar-adob-t.jpg',
    nombre: 'Sandwich de jamon y queso',
    precio: '$50'
} */

export default ProductosComida;