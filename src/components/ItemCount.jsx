import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';

const ItemCount = (verDisenos) => {

  const {verDisenos:disenio}=verDisenos
  
    const [contador,setContador]=useState(1);

    const {addToCart} = useContext(CartContext);

    const sumar=()=>{
        contador<10 ? setContador(contador+1) : alert("No hay stock");
        
    }
    const restar=()=>{
        contador>1 ? setContador(contador-1) : alert("la cantidad minima es 1");
        
    }
    

  return (
    <div className="botones">
      <section>
        <button className="resta" onClick={restar}>-</button>
        <p className={"contador"}>{contador}</p>
        <button className="suma" onClick={sumar}>+</button>
      </section>

    <button className={"agregar"} onClick={() =>addToCart(disenio, contador)}>Agregar al carrito</button>
    </div >
  )
}

export default ItemCount