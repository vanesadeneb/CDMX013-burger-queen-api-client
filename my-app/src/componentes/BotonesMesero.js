import React from 'react';

const BotonesMesero = (props) => {
    return(
        <div className="botones-container">
           <button className="boton-desayuno" type="submit">Desayunos</button>
           <button className="boton-comida" type="submit">Comida</button>
           <button className="boton-pedidos" type="submit">Completados</button>
        </div>
    );
}
export default BotonesMesero;