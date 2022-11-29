import React from 'react';
import { Link } from 'react-router-dom';

const BotonesMesero = (props) => {
    return(
        <div className="botones-container">
           <Link to={`/menuDesayunos`}><button className="botones boton-desayuno" type="submit">Desayunos</button></Link>
           <button className="botones" type="submit">Comida</button>
           <button className="botones boton-pedidos" type="submit">Pedidos Completados</button>
        </div>
    );
}
export default BotonesMesero;