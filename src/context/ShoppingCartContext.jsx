import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

export const CartContext= createContext(null)

const carrito=[]


export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState(0)
    const [total, setTotal] =useState(0)
    const [img, setImg] = useState("")

    const navigate = useNavigate();

    const addToCart = (item, qty) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            
          })
          
          let itemExists = false;

          carrito.forEach(cartItem => {
              if (cartItem.id === item.id) {
                  cartItem.cantidad += qty;
                  itemExists = true;
              }
          });

        if(itemExists){
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
                imageUrl: `${item.img}`,
                imageHeight: 80,
                imageAlt: `Compro ${item.nombre}`,
                title: `Se agregaron ${qty} unidades de ${item.nombre}`,
                width: '20rem',
              })
        } 
        
        
    }

    const deleteItem=(id) => {
        const eliminarItem=carrito.find((item) => item.id === id)
        const {cantidad, nombre, precio} =eliminarItem

        Swal.fire({
            title: `Estas por eliminar ${nombre}?`,
            text: `Vas a eliminar un ${cantidad} del carrito!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {

                const indice = carrito.indexOf(eliminarItem);
                setTotal(total-(cantidad * precio))
                setCart(cart-cantidad)
                carrito.splice(indice,1)

                if(carrito.length == 0){
                  navigate('/diseno')
                }
            
                Swal.fire({
                    
                    icon: "success",
                    title: "Producto eliminado",
                    showConfirmButton: false,
                    timer: 1200
                  });
                  
            }
          });
        
    }

    const removeList=() => {
        Swal.fire({
            title: `Desea vaciar el carrito?`,
            text: `Vas a eliminar ${cart} productos del carrito!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminar!"
          }).then((result) => {
            if (result.isConfirmed) {

                carrito.length=0
                setCart(0)
                setTotal(0)    
            
                Swal.fire({
                    icon: "success",
                    title: "Carrito vaciado",
                    showConfirmButton: false,
                    timer: 1200
                  });
                  
            }
          });
        

            
    }


   
    return (
        <CartContext.Provider value={{cart, setCart, addToCart, removeList, deleteItem, carrito,total, img, setImg}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider