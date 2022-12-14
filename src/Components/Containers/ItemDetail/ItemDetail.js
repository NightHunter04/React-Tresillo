import React, { useContext, useState } from "react";
import "./ItemDetail.css"
import { ItemCount } from '../../ItemCount/ItemCount'
import {Link} from "react-router-dom";
import { Context } from "../../../Context/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
 

const ItemDetail = ({listaProducto}) => {
  const [isPressedButton, setIsPressedButton ] = useState(false);
  const {addItem} = useContext (Context);
  
  const onAdd = (cantidad) => {
    addItem (listaProducto, cantidad)  
    setIsPressedButton(true);
    toast('Producto Agregado', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  };

  return (
    <div className='vistaProducto'>
      <div className="infoProducto">
       <img className='imgProducto' alt= {listaProducto.titulo} src= {listaProducto.img}/>
       <h1 className='nombreProducto'>{listaProducto.nombre}</h1>
       <span className=' descripcionProducto'>{listaProducto.descripcion}</span>
       <h2 className='precioProducto'>{listaProducto.precio}</h2>
       {! isPressedButton ? (
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        ) : (
          <Link  to="/cart">
            <button  className="finalizar">Agregar</button>
          </Link>
         )}
          <ToastContainer  />
               
        
      
    </div>
  </div>
)}

export default ItemDetail  
 