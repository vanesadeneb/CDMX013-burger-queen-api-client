import React from "react"

const Platillos = ({producto, agregar}) => {
    
    return(
    <div className='contenedor-producto' onClick={()=>agregar(producto)}>
        
        <img className="imagen-producto"
            src={producto.image}
            alt={producto.name}
        />
        <div className='contenedortexto'>
            <p className='infoproducto'>{producto.name}</p>
            <p className='infoproducto'> {producto.price}</p>
        </div>
        </div>
)}

export default Platillos;
