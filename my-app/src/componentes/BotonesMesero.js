import React from 'react';
import { Link } from 'react-router-dom';

const BotonesMesero = (props) => {
    return(
        <div className="botones-container">
           <Link to={`/menuDesayuno`}><button className="botones boton-desayuno" type="submit">Desayunos</button></Link>
           <Link to={`/menuComida`}><button className="botones boton-comida" type="submit">Comida</button></Link>
           <button className="botones boton-pedidos" type="submit">Pedidos Completados</button>
        </div>
    );
}
export default BotonesMesero;