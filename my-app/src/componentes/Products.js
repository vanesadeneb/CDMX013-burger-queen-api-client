
//import producto1 from '../imagenes/producto1.png';

export const ProductosBreakfast = (props) => {
    return(
       
            <div className='producto'>
                 <img className="imagen-producto"
                src={props.imagen}
                alt={props.nombre}
                />
                <div className='contenedortexto'>
                    <p className='nombreproducto'>{props.nombre}</p>
                    <p className='precio'> {props.precio}</p>
                </div>
            </div>
       
    );
}

export const productos = {
    imagen: 'https://images.hola.com/imagenes/cocina/recetas/20210208183946/sandwich-jamon-queso/1-72-559/sandwich-havar-adob-t.jpg',
    nombre: 'Sandwich de jamon y queso',
    precio: '$50'
} 



//conmy-app\src\imagenes\logo.pngst Btn ()=> <button onClick={ ()=> alert(“Hola”) }>Enviar </button> 

