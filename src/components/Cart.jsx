import React from 'react'
import ItemList from './ItemList'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Formulario from './Form';

const Cart = () => {

const {carrito}=useContext(CartContext)
  return (
    <>
    <h1>carrito</h1>
         <ItemList verDisenos={carrito}/>
         <Formulario/>
    </>
  )
}

export default Cart