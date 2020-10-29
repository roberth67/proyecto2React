import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJs', precio: 50 },
    { id: 2, nombre: 'Camisa CSS', precio: 50 },
    { id: 3, nombre: 'Camisa HTML', precio: 50 },
    { id: 4, nombre: 'Camisa Js', precio: 50 }
  ]);

  // State para un carrito de compras

  const [ carrito, agregarProducto] = useState( [] );



  //Obtener fecha
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
       <Header 
        titulo='Tienda Virtual'
        numero={20}
       />

      <h1>Lista de Productos</h1>
      {productos.map(producto => (
        <Producto 
        key={producto.id}
        producto = {producto} 
        carrito = {carrito}
        productos={productos}
        agregarProducto= {agregarProducto}/>
      ))}

      <Carrito
        carrito={carrito}
        agregarProducto={agregarProducto}
      />
       <Footer 
        fecha={fecha}
       />
    </Fragment>
  );
}

export default App;
