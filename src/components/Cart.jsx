import React, { useEffect } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import Formulario from './Form';
import './cart.scss'
import { useNavigate } from 'react-router-dom';


function Cart() {

  const { carrito, total,deleteItem} = useContext(CartContext);
  const navigate = useNavigate();

//no permite entrar a cart si no hay productos en el carrito
  useEffect(() => {
    if(carrito.length == 0){
      navigate('/diseno')
    }
  }, []); 

  return (
    <>
      <h1 className='pt-4 mb-3 text-center'>Carrito</h1>
      <section className='d-flex flex-column align-items-center mb-5'>
        {carrito.map((elem) => {
          const { id, cantidad, img, nombre, precio } = elem;
          return (
            <article key={id} className='elemento w-75 d-flex justify-content-between aling-items-center'>
              <img src={img} width="150px" height="auto" alt="" />
              <h4>{nombre}</h4>
              <h4>{cantidad}</h4>
              <h4>${precio}</h4>
              <h4>${precio * cantidad}</h4>
              <div onClick={() => deleteItem(id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className={"eliminar"} viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                </svg>
              </div>
            </article>

          );
        })}
        <h3 className='mt-3'>Total: ${total}</h3>
      </section>
      <h3 className='text-center mb-5'>Ingrese sus datos para finalizar la compra</h3>
      <Formulario />
    </>
  );
}

export default Cart