import React from 'react';
//import { useEffect } from 'react';
//import { useState } from 'react';
import Platillos from './Platillos'; 


export const ProductosBreakfast = ({productos, agregar}) => {
    return (
        <div className='container-productos'>
            {productos && productos.map(producto =>{
                if(producto.type === "desayuno"){
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

export default ProductosBreakfast;