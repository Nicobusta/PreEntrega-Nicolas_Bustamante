import React from 'react'
import { useState } from 'react'
import './ItemCount.scss'

const ItemCount = () => {
    const [contador,setContador]=useState(0);

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
    </>
  )
}

export default ItemCount