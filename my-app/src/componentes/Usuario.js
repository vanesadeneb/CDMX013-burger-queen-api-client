import React from 'react';

const Usuario = (props) => {
    console.log(props.usuario.Email);
    return (
        <table>

            <tr>

                <td>Email: {props.usuario.Email}</td>

                <td>Rol : {props.usuario.Rol}</td>

                <td>Id: {props.usuario.id}</td>

            </tr>


        </table>
    );
};

export default Usuario;