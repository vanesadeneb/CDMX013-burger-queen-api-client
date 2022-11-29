import React, { useEffect } from 'react';
import { useState} from 'react';
import Usuario from './Usuario';

const Admin = () => {
    const [usuarios, setUsuarios] = useState(null);
    useEffect(()=>{
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/AUTH')
        .then(response => response.json())
        .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
    },[])
    return (
        <div>
            <h1>Estos son mis Usuarios:</h1>
            {usuarios && usuarios.map(usuario => <Usuario usuario={usuario} key={usuario.id}/>)}
        </div>
        
    );
}

export default Admin;