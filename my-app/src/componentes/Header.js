import React from 'react';
import spaceburgersHorizontal from '../imagenes/spaceburgersHorizontal.png';
import rocket from '../imagenes/rocket.png'

export const Header = (props) => {
    return(
        <div className="header-container">
            <img className="logoHorizontal" src={spaceburgersHorizontal} alt="Space Burgers" />
            <p className="titulo">{props.text}</p>
            <div className='contenedor-logout'>
                <img className="logOut" src={rocket} alt="Log Out" />
                <p className='logOutText'>Log Out</p>
            </div>
           
        </div>
    );
}

export const titulo = {
    text: "Menú Desayunos",
}