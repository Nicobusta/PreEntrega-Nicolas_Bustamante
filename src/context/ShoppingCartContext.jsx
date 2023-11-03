import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext= createContext(null)

const carrito=[]


export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(0)
    const [total, setTotal] =useState(0)
    const [img, setImg] = useState("")

    

    const addToCart = (item, qty) => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            
          })
          

        if(carrito.includes(item)){
            item.cantidad+=qty
            setCart(cart+qty)
            setTotal(total+(item.precio*qty))
           
              
              Toast.fire({
                icon: 'success',
                title: `Se agregaron ${qty} unidades de ${item.nombre}`
              })
            
        }else{
            item.cantidad=qty
            carrito.push(item)
            setCart(cart+qty)
            setTotal(total+(item.precio*qty))

            Toast.fire({
                icon: 'success',
                title: `Añadio ${item.nombre} al carrito`
              })
        } 
        
        
    }

    const deleteItem=(id) => {
        const eliminarItem=carrito.find((item) => item.id === id)

        const {cantidad, precio} =eliminarItem
        const indice = carrito.indexOf(eliminarItem);

        setTotal(total-(cantidad * precio))
        setCart(cart-cantidad)

        carrito.splice(indice,1)
        
        
        
    }

    const removeList=() => {
        carrito.length=0
        setCart(0)
        setTotal(0)
        
    }


   
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeList, deleteItem, carrito,total, img, setImg}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider