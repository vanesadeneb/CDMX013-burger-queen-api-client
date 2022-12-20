import React from 'react';
import spaceburgersHorizontal from '../imagenes/spaceburgersHorizontal.png';
import rocket from '../imagenes/rocket.png';
import notification from '../imagenes/notification.png';

export const Header = ({cambiarUsuario, text}) => {
    
    const logout = (e) => {localStorage.clear() 
        cambiarUsuario("","");
    } 

    return(
        <div className="header-container">
            <img className="logoHorizontal" src={spaceburgersHorizontal} alt="Space Burgers" />
            <p className="titulo">{text}</p>
            <div id="contenedor-botones">
                <div className='contenedor-completados'> 
                    <img className='completados' src={notification} alt="Pedidos Completados" />
                    <p className='completadosText'>Pedidos Completados</p>
                </div>
                <div className='contenedor-logout' onClick={logout}>
                    <img className="logOut" src={rocket} alt="Log Out" />
                    <p className='logOutText'>Log Out</p>
                </div>
            </div>
           
        </div>
    );
}

export const titulo = [
    {
        nombre: "Mesero",
        text: "Menú",
    },
    {
        nombre:"Admin",
        text: "Personal"
    }
]