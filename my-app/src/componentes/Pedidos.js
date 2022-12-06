import React, { useState, useEffect } from 'react';


const Pedido = ({order}) => {
    console.log("orden: ", order);
    const [productos, setProductos] = useState(null);
    /*
    const [contar, setContar] = useState(0);
        
    useEffect(()=>{
        document.getElementById('cantidad').textContent = contar;
    });

    const restar = () => {
        if(contar > 0){
            setContar(contar - 1);
        }
        
    }
*/
    return (
        <div className="contenedor-pedidos">
            <header>
                <h1>Pedido #0000:</h1>
            </header>
            <main className="main">
                <ul className="lista-productos">
                    {order.map((item) =>
                    <li>
                        <span className="producto">{item.product.name}</span>
                        <span className="contador">
                            <button  >+</button>
                            <span id='cantidad'>{item.qty}</span>
                            <button  >-</button>
                        </span>
                        <span className="precio">$50.00</span>
                    </li>
                )}
                </ul>
                <p className="impuestos">Impuestos (incluidos)</p>
                <section className="total">
                    <p>Total: </p><span>$200.00</span>
                </section>
                <footer>
                    <button className="enviar"  onClick={() => console.log("funciona el click")}>Mandar Pedido</button>
                </footer>
            </main>
        </div>
    );
}

export default Pedido;