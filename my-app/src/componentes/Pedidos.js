import React, { useEffect, useState } from 'react';


const Pedido = ({productos, order, agregar}) => {
    console.log(productos);
    const[total, setTotal] = useState(0);
    const [resta, setResta] = useState(0);
    const [producto, setProducto] = useState([]);
    
    //productos.map((producto)=>{
    //    producto
    //});

    const totalPedido = () => {
        let suma = 0;
        for(let i = 0; i < order.length; i++){
            suma += order[i].precio; 
        }
        return(suma);
    }
    
    
    useEffect(()=>{
        setTotal(totalPedido);
        //setResta(restar);
    });

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
                            <button onClick={()=>{agregar(item.product)}}>+</button>
                            <span id='cantidad'>{item.qty}</span>
                            <button onClick={()=>{  
                                        item.qty = item.qty-1;
                                        item.precio = (item.qty-1) * producto.price;
                                    }
                             } >-</button>
                        </span>
                        <span className="precio">${item.precio} </span>
                    </li>
                )}
                </ul>
                <section className="total impuestos">
                    <p>Total: </p><span id='total'>${total}</span>
                </section>
                <footer>
                    <button className="enviar"  onClick={() => console.log("funciona el click")}>Mandar Pedido</button>
                </footer>
            </main>
        </div>
    );
}

export default Pedido;