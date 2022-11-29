import React from 'react';

const Usuario = (props) => {
    console.log(props.usuario.Email);
    return (
        <div>
            <p>Email: {props.usuario.Email}</p>
            <p>Rol : {props.usuario.Rol}</p>
            <p>Id: {props.usuario.id}</p>
        </div>
    );
};

export default Usuario;