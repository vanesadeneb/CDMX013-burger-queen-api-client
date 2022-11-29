import logo from '../imagenes/logo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

const Login = () => {
    const navigate = useNavigate(); 
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    useEffect(()=>{
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/AUTH')
        .then(response => response.json())
        .then(todosLosUsuarios => setCorreo(todosLosUsuarios))
    },[])
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        const correoDelInput = e.target.correo.value;
        const contraseñaDelInput = e.target.contraseña.value;

        //console.log(correo, contraseña);

        //validaciones
        if(correoDelInput === ''){
            document.getElementById('errorCorreo').style.visibility = 'visible';
        }else{
            setCorreo(correoDelInput);
            document.getElementById('errorCorreo').style.visibility = 'hidden';
        }

        if(contraseñaDelInput === ''){
            document.getElementById('errorContraseña').style.visibility = 'visible';
        }else{
            setContraseña(contraseñaDelInput);
            document.getElementById('errorContraseña').style.visibility = 'hidden';
        }
        console.log(correo[1].Email);
        correo.forEach((usuario) => {
            if(usuario.Email === correoDelInput){
               const rol = usuario.Rol;
               switch(rol){
                case('Mesero'):
                console.log(usuario, rol);
                navigate("/pedidos");
                break;
               }
            }
        });
        
        //fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/AUTH')
        //    .then(response => response.json())
        //    .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
        //navigate('/pedidos');
    } 
    
    return(
        <div className="login-container">
            <img className="logo" src={logo} alt="logo" />
            <form onSubmit={onSubmit}>
                <input className="correo" id="correo" htmlFor="password" type="text" placeholder="Escribe tu correo"></input>
                <p id='errorCorreo'>Por favor ingresa un correo</p>
                <input className="contraseña" id="contraseña" name= "contraseña" type="password" placeholder="Escribe tu contraseña"></input>
                <p id='errorContraseña'>Por favor ingresa un correo</p>
                <button className="iniciar-sesion" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    );
}

export default Login;