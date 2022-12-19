import React, { useState } from 'react';
import editar from '../../imagenes/editar.png'
import borrar from '../../imagenes/borrar.png'


const Usuario = ({usuario}) => {
    const [rol, setRol] = useState("");


    console.log(usuario);
    return (     
            <tr>
                <td>{usuario.id}</td>
                <td>{usuario.email.email}</td>
                <td>{usuario.roles.isKitchen ? "Cocinero" : usuario.roles.isAdmin ? "Admin" : "Mesero"}</td>
                <td> <img className="editar" src={editar} alt="editar" /></td>
                <td><img className="borrar" src={borrar} alt="borrar" /></td>
            </tr>
    );
};

export default Usuario;