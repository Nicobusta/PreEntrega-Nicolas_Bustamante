import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext= createContext(null)

const carrito=[]


export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(0)

  const [total, setTotal] =useState(0)

    

    const addToCart = (item, qty) => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

        if(carrito.includes(item)){
            item.cantidad+=qty
            setCart(cart+qty)
              
              Toast.fire({
                icon: 'success',
                title: `Se agregaron ${qty} unidades de ${item.nombre}`
              })
            
        }else{
            item.cantidad=qty
            carrito.push(item)
            setCart(cart+qty)

            Toast.fire({
                icon: 'success',
                title: `Añadio ${item.nombre} al carrito`
              })
        } 
        
        
    }

    const deleteItem=(id) => {
        const eliminarItem=carrito.find((item) => item.id === id)
        const indice = carrito.indexOf(eliminarItem);
        carrito.splice(indice,1)
        
        setCart(cart-eliminarItem.cantidad)
        
    }

    const removeList=() => {
        carrito.length=0
        setCart(0)
        
    }


   
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeList, deleteItem, carrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider