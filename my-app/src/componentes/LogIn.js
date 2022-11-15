import logo from '../imagenes/logo.png';

const Login = (props) => {
    return(
        <div className="login-container">
            <img className="logo" src={logo} alt="logo" />
            <input className="correo" type="text" ></input>
            <input className="contraseña" type="password"></input>
            <button className="iniciarSesion" type="submit">Iniciar Sesion</button>
        </div>
    );
}

//conmy-app\src\imagenes\logo.pngst Btn ()=> <button onClick={ ()=> alert(“Hola”) }>Enviar </button> 

export default Login;