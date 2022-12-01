import React, { useState, useEffect } from 'react';


const Pedido = (props) => {

    const [contar, setContar] = useState(0);
        
    useEffect(()=>{
        document.getElementById('cantidad').textContent = contar;
    });

    const restar = () => {
        if(contar > 0){
            setContar(contar - 1);
        }
        
    }

    return (
        <div className="contenedor-pedidos">
            <header>
                <h1>Pedido #0000{props.num}:</h1>
            </header>
            <main className="main">
                <ul className="lista-productos">
                    <li>
                        <span className="producto">Cafe Americano</span>
                        <span className="contador">
                            <button  onClick={() => setContar(contar + 1)}>+</button>
                            <span id='cantidad'>1</span>
                            <button  onClick={restar}>-</button>
                        </span>
                        <span className="precio">$50.00</span>
                    </li>
                    <li>
                        <span className="producto">Sandwich de jamón y queso</span>
                        <span className="contador">
                            <button  onClick={() => console.log("funciona el click")}>+</button>
                            <span>1</span>
                            <button  onClick={() => console.log("funciona el click")}>-</button>
                        </span>
                        <span className="precio">$150.00</span>
                    </li>
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