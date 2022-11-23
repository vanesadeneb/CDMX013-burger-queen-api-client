import React from 'react';
import {Header, titulo} from './Header'
import BotonesMesero from './BotonesMesero';
import Pedido from './Pedidos'
import { ProductosBreakfast, productos } from './ProductosDesayuno';


const Mesero = () => {
    return (
    <div>
        <Header
          text = { titulo.text}
           />
        <BotonesMesero/>
        <ProductosBreakfast
          imagen={productos.imagen}
          nombre={productos.nombre}
          precio={productos.precio}
          />
      
        <Pedido/>
    </div>
    );
}
export default Mesero;