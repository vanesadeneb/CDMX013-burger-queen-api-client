import React, { useEffect } from 'react';
import { useState } from 'react';
import Usuario from './Usuario';
import { Header, titulo } from '../Header'

const Admin = ({cambiarUsuario}) => {
        const [usuarios, setUsuarios] = useState(null);
    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/Users')
            .then(response => response.json())
            .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
    }, [])
    /*
    const infoUsuario = {
        email: ,
        roles: ,
        admin: 
     };
*/
    

    return (
        <div>
            <Header
                text={titulo[1].text}
                cambiarUsuario={cambiarUsuario}
            />
            <table className='tabla-encabezado'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {usuarios && usuarios.map(usuario => <Usuario usuario={usuario} key={usuario.id} />)}
                </tbody>
            </table>
        </div>

    );
}
//titulo.text = "Personal"
export default Admin;