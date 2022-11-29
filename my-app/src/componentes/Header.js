import React from 'react';
import spaceburgersHorizontal from '../imagenes/spaceburgersHorizontal.png';
import rocket from '../imagenes/rocket.png';
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {
    const navigate = useNavigate();
    
    const logout = (e) => {
        navigate('/');
    } 
    return(
        <div className="header-container">
            <img className="logoHorizontal" src={spaceburgersHorizontal} alt="Space Burgers" />
            <p className="titulo">{props.text}</p>
            <div className='contenedor-logout' onClick={logout}>
                <img className="logOut" src={rocket} alt="Log Out" />
                <p className='logOutText'>Log Out</p>
            </div>
           
        </div>
    );
}

export const titulo = {
    text: "Menú Desayunos",
}