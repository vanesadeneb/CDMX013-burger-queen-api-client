import React from 'react';
import { Link } from 'react-router-dom';

const BotonesMesero = (props) => {
    return(
        <div className="botones-container">
           <Link to={`/Mesero/menuDesayuno`}><button className="botones" type="submit">Desayunos</button></Link>
           <Link to={`/Mesero/menuComida`}><button className="botones" type="submit">Comida</button></Link>
        </div>
    );
}
export default BotonesMesero;