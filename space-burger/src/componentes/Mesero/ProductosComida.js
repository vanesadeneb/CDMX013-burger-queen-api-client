import React from 'react';
//import { useEffect } from 'react';
//import { useState } from 'react';
import Platillos from './Platillos'; 


export const ProductosComida = ({productos, agregar}) => {
    return (
        <div className='container-productos'>
            {productos && productos.map(producto =>{
                if(producto.type === "comida"){
                    return <Platillos producto={producto} key={producto.id} agregar={agregar}/>
                }
            })
        } 
        </div>
        
    );
}

export default ProductosComida;