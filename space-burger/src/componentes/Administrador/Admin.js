import React, { useEffect } from 'react';
import { useState } from 'react';
import Usuario from './Usuario';
import { Header, titulo } from '../Header'

const Admin = () => {
    const [usuarios, setUsuarios] = useState(null);
    useEffect(() => {
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/AUTH')
            .then(response => response.json())
            .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
    }, [])
    return (
        <div>
            <Header
                text={titulo[1].text}
            />
            <table className='tabla-encabezado'>
                <tr>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Id</th>
                    <th>Edit</th>
                    <th>Delete</th>

                </tr>
            </table>
            {usuarios && usuarios.map(usuario => <Usuario usuario={usuario} key={usuario.id} />)}
        </div>

    );
}
titulo.text = "Personal"
export default Admin;