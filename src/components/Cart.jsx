import React from 'react'

import ItemList from './ItemList'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {

const {carrito}=useContext(CartContext)
  return (
    <>
    <h1>carrito</h1>
         <ItemList verDisenos={carrito}/>
    </>
  )
}

export default Cart