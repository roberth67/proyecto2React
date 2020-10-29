import React from 'react';
import './../Assets/carrito.css';
import Producto from './Producto';

const Carrito = ({carrito, agregarProducto}) => {
    
    return ( 
    <div className="carrito">
        <h1>Tu carrito de compras</h1>

        {carrito.length === 0
        ?
            <p>No hay elementos en el carrito</p>
        : carrito.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))
        }
    </div>
     );
}
 
export default Carrito;
