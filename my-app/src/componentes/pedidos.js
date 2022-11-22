const Pedido = (props) => {
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
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </span>
                        <span className="precio">$50.00</span>
                    </li>
                    <li>
                        <span className="producto">Sandwich de jamón y queso</span>
                        <span className="contador">
                            <button>+</button>
                            <span>1</span>
                            <button>-</button>
                        </span>
                        <span className="precio">$150.00</span>
                    </li>
                </ul>
                <p className="impuestos">Impuestos (incluidos)</p>
                <section className="total">
                    <p>Total: </p><span>$200.00</span>
                </section>
                <footer>
                    <button className="enviar">Mandar Pedido</button>
                </footer>
            </main>
        </div>
    );
}

export default Pedido;