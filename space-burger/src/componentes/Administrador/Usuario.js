import React from 'react';
import editar from '../../imagenes/editar.png'
import borrar from '../../imagenes/borrar.png'


const Usuario = (props) => {
    console.log(props.usuario.Email);
    return (
        <table className='tabla-usuarios'>
           
            <tr>
                <td>{props.usuario.Email}</td>
                <td>{props.usuario.Rol}</td>
                <td>{props.usuario.id}</td>
                <td> <img className="editar" src={editar} alt="editar" /></td>
                <td><img className="borrar" src={borrar} alt="borrar" /></td>


            </tr>


        </table>
    );
};

export default Usuario;