import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = (diseno) => {

  const {diseno:disenio}=diseno
  
    const [contador,setContador]=useState(1);

    const {addToCart} = useContext(CartContext);

    const sumar=()=>{
        contador<10 ? setContador(contador+1) : alert("No hay stock");
        
    }
    const restar=()=>{
        contador>1 ? setContador(contador-1) : alert("la cantidad minima es 1");
        
    }
    

  return (
    <>
    <button className="resta" onClick={restar}>-</button>
    <p>{contador}</p>
    <button className="suma" onClick={sumar}>+</button>

    <button onClick={() =>addToCart(disenio, contador)}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount