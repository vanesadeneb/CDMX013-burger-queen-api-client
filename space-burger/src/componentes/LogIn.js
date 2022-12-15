import logo from '../imagenes/logo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect} from 'react';

const Login = ({user, setUsuario}) => {
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]); 
    const [correo, setCorreo] = useState('');
    const [contraseña, setContraseña] = useState('');
    

    useEffect(()=>{
        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/AUTH')
        .then(response => response.json())
        .then(todosLosUsuarios => setUsuarios(todosLosUsuarios))
    },[])
       
    const onSubmit = (e) => {
        e.preventDefault();

        //validaciones
        if(correo === ''){
            document.getElementById('errorCorreo').style.visibility = 'visible';
        }else{
            document.getElementById('errorCorreo').style.visibility = 'hidden';
            localStorage.setItem("credenciales", JSON.stringify(correo));
            setUsuario(correo);
        }

        if(contraseña === ''){
            document.getElementById('errorContraseña').style.visibility = 'visible';
        }else{
            document.getElementById('errorContraseña').style.visibility = 'hidden';
        }

        usuarios.forEach((usuario) => {
            if(usuario.Email === correo && usuario.Password === contraseña){
               const rol = usuario.Rol;
               switch(rol){
                case('Mesero'):
                    console.log(usuario, rol);
                    navigate("/Mesero");
                    break;
                case('Admin'):
                    console.log(usuario, rol);
                    navigate("/Admin");
                    break;
                default:
                    console.log('no estas registrado o no tienes un rol asignado');
                    break;
               }
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