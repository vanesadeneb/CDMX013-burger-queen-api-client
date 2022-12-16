import React, { useEffect, useState } from 'react';
import borrar from '../../imagenes/borrar.png'
import Swal from 'sweetalert2'

const Pedido = ({order, agregar, restar, eliminar, formatearOrden}) => {
    const[total, setTotal] = useState(0);
    const [cliente, setCliente] = useState("");
  
    const totalPedido = () => {
        let suma = 0;
        for(let i = 0; i < order.length; i++){
            suma += order[i].precio; 
        }
        return(suma);
    }
     
    
    useEffect(()=>{
        setTotal(totalPedido);
    }); 

    const nombreCliente = (e) => {
        e.preventDefault();
        setCliente(e.target.value);
    };

    const informacionDeLaOrden = (e) => {
        e.preventDefault();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'El pedido fue enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
        const infoOrden = {
           userId: JSON.parse(localStorage.getItem("credenciales")),
           client: cliente,
           products: order,
           status: "pending",
           dateEntry: new Date(),
        };

        const valoresPorDefecto = () => {
            formatearOrden();
            setCliente("");
            document.getElementById("cliente").value = "";
          };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(infoOrden)
        };

        fetch('https://6375370348dfab73a4f4e62a.mockapi.io/api/ORDERS', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                valoresPorDefecto();
        });
    }
    
    return (
        <div className="contenedor-pedidos">
                <header className='form-cliente'>
                        <p>Cliente </p>
                        <input onChange={nombreCliente} id="cliente" type="text" className='info-cliente'></input>
                </header>
                <main className="main">
                    <ul className="lista-productos">
                        {order.map((item) =>
                        <li key={item.product.id}>
                            <span className="producto">{item.product.name}</span>
                            <span className="contador">
                                <button onClick={()=>{agregar(item.product)}}>+</button>
                                <span id='cantidad'>{item.qty}</span>
                                <button onClick={()=>{item.qty <= 1 ? eliminar(item.product) : restar(item.product)}} >-</button>
                            </span>
                            <span className="precio">${item.precio} </span>
                            <span onClick={()=> {eliminar(item.product)}}><img className="icono-borrar" src={borrar} alt="borrar" /></span>
                        </li>
                    )}
                    </ul>
                    <section className="total impuestos">
                        <p>Total: </p><span id='total'>${total}</span>
                    </section>
                    <footer>
                        <button className="enviar" onClick={informacionDeLaOrden}>Mandar Pedido</button>
                    </footer>
                </main>
        </div>
    );
}

export default Pedido;