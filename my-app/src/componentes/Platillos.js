import React from "react"

const Platillos = (props) => {
    return(
    <div className='contenedor-producto' onClick={() => console.log("funciona el click")}>

        <img className="imagen-producto"
            src={props.producto.Imagen}
            alt={props.producto.Producto}
        />
        <div className='contenedortexto'>
            <p className='infoproducto'>{props.producto.Producto}</p>
            <p className='infoproducto'> {props.producto.Precio}</p>
        </div>
        </div>
)}

export default Platillos;
