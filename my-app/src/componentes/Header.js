import React from 'react';
import spaceburgersHorizontal from '../imagenes/spaceburgersHorizontal.png';
import rocket from '../imagenes/rocket.png';
import { useNavigate } from 'react-router-dom';
import notification from '../imagenes/notification.png';

export const Header = (props) => {
    const navigate = useNavigate();
    
    const logout = (e) => {localStorage.clear() 
        console.log(localStorage.getItem('credenciales'));
        navigate('/');
    } 
    const completados= (e) =>{
        navigate('/Completados')
    }
    return(
        <div className="header-container">
            <img className="logoHorizontal" src={spaceburgersHorizontal} alt="Space Burgers" />
            <p className="titulo">{props.text}</p>
            <div id="contenedor-botones">
                <div className='contenedor-completados' onClick={completados}> 
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