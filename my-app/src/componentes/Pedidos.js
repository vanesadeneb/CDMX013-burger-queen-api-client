import React from 'react';


const Pedido = ({order}) => {
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
                    <li key={item.product.id}>
                        <span className="producto">{item.product.name}</span>
                        <span className="contador">
                            <button>+</button>
                            <span id='cantidad'>{item.qty}</span>
                            <button  >-</button>
                        </span>
                        <span className="precio">${item.precio} </span>
                    </li>
                )}
                </ul>
                <p className="impuestos">Impuestos (incluidos)</p>
                
                <section className="total">
                    <p>Total: </p><span id='total'>${}</span>
                </section>
                <footer>
                    <button className="enviar"  onClick={() => console.log("funciona el click")}>Mandar Pedido</button>
                </footer>
            </main>
        </div>
    );
}

export default Pedido;