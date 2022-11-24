import React from 'react';

const BotonesMesero = (props) => {
    return(
        <div className="botones-container">
           <button className="botones boton-desayuno" type="submit">Desayunos</button>
           <button className="botones" type="submit">Comida</button>
           <button className="botones boton-pedidos" type="submit">Pedidos Completados</button>
        </div>
    );
}
export default BotonesMesero;