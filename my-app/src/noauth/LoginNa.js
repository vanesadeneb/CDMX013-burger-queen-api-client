import logo from '../imagenes/logo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        e.preventDefault();
        const correo = e.target.correo.value;
        const contraseña = e.target.contraseña.value;

        console.log(correo, contraseña)
        //navigate('/pedidos');
    } 
    
    return(
        <div className="login-container">
            <img className="logo" src={logo} alt="logo" />
            <input className="correo" type="text" placeholder="Escribe tu correo" htmlFor="correo"></input>
            <input className="contraseña" type="password" placeholder="Escribe tu contraseña" htmlFor="contraseña"></input>
            <button className="iniciar-sesion" type="submit" onClick={onSubmit}>Iniciar Sesion</button>
        </div>
    );
}

//conmy-app\src\imagenes\logo.pngst Btn ()=> <button onClick={ ()=> alert(“Hola”) }>Enviar </button> 

export default Login;