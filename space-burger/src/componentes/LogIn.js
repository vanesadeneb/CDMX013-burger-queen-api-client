import logo from '../imagenes/logo.png';
import React from 'react';
import { useState, useEffect} from 'react';

const Login = ({cambiarUsuario}) => {
    const [usuarios, setUsuarios] = useState([]); 
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    

    useEffect(()=>{
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/Users')
        .then(response => response.json())
        .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
    },[])
      
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(usuarios); 
        //validaciones
        if(correo === ''){
            document.getElementById('errorCorreo').style.visibility = 'visible';
        }else{
            document.getElementById('errorCorreo').style.visibility = 'hidden';
            localStorage.setItem("credenciales", JSON.stringify(correo));
        }

        if(contraseña === ''){
            document.getElementById('errorContraseña').style.visibility = 'visible';
        }else{
            document.getElementById('errorContraseña').style.visibility = 'hidden';
        }

        usuarios.forEach((usuario) => {
            if(usuario.email.email === correo){
                cambiarUsuario(usuario.email.email, usuario.admin, usuario.roles.isWaiter);
            }
        });
    } 
    
    return(
        <div className="login-container">
            <img className="logo" src={logo} alt="logo" />
            <form onSubmit={onSubmit}>
                <input className="correo" id="correo" value={correo} type="text" onChange={(e) => setCorreo(e.target.value)} placeholder="Escribe tu correo"></input>
                <p id='errorCorreo'>Por favor ingresa un correo</p>
                <input className="contraseña" id="contraseña" value={contraseña} type="password" onChange={(e) => setContraseña(e.target.value)} placeholder="Escribe tu contraseña"></input>
                <p id='errorContraseña'>Por favor ingresa tu contraseña</p>
                <button className="iniciar-sesion" type="submit">Iniciar Sesion</button>
            </form>
        </div>
    );
}

export default Login;