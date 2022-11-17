import spaceburgersHorizontal from '../imagenes/spaceburgersHorizontal.png';
import rocket from '../imagenes/rocket.png'

export const Header = (props) => {
    return(
        <div className="header-container">
            <img className="logoHorizontal" src={spaceburgersHorizontal} alt="Space Burgers" />
            <p className="titulo">{props.text}</p>
            <img className="logOut" src={rocket} alt="Log Out" />
           
        </div>
    );
}

export const titulo = {
    text: "Menú Desayunos",
}