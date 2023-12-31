import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartWidget = () => {

  const {cart,carrito,removeList, deleteItem, total} = useContext(CartContext); 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hideIcon=()=>{
    if(carrito.length>0){
      handleShow()
    }else{
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
      
      Toast.fire({
        icon: 'warning',
        title: 'No tienes productos en el carrito'
      })
    }
  }

  const validarCarrito=(element)=>{
    if(carrito.length == 1){
      deleteItem(element)
      handleClose()
    }else{
      deleteItem(element)
    }
  }

  return (
    <>  

      <a onClick={hideIcon} className="icon__nav__carrito">
        <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1" viewBox="0 0 32 32" id="trolley">
            <path d="M24.214,32c-1.817,0-3.296-1.479-3.296-3.296s1.479-3.296,3.296-3.296s3.296,1.479,3.296,3.296S26.031,32,24.214,32z M24.214,27.408c-0.715,0-1.296,0.581-1.296,1.296S23.499,30,24.214,30s1.296-0.581,1.296-1.296S24.929,27.408,24.214,27.408z M13.193,32c-1.817,0-3.296-1.479-3.296-3.296s1.479-3.296,3.296-3.296s3.296,1.479,3.296,3.296S15.011,32,13.193,32z M13.193,27.408c-0.715,0-1.296,0.581-1.296,1.296S12.479,30,13.193,30s1.296-0.581,1.296-1.296S13.908,27.408,13.193,27.408z M27.837,24.55H11.776c-1.606,0-3.031-1.302-3.177-2.901L6.919,3.082C6.867,2.506,6.313,2,5.734,2H2.632c-0.553,0-1-0.447-1-1s0.447-1,1-1h3.103c1.606,0,3.031,1.302,3.177,2.901l0.125,1.385h18.332c1.654,0,3,1.346,3,3v5.897c0,1.587-1.223,3.059-2.784,3.349l-17.151,3.182l0.159,1.754c0.052,0.576,0.605,1.082,1.185,1.082h16.061c0.553,0,1,0.447,1,1S28.39,24.55,27.837,24.55z M9.218,6.286l1.034,11.427l16.967-3.147c0.612-0.113,1.149-0.76,1.149-1.382V7.286c0-0.552-0.448-1-1-1H9.218z"></path>
        </svg>
        <span>{cart === 0 ? '' : cart}</span>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton className='encabezado'>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <section className='cuerpo'>
            {
            carrito.map((item) => {
              const {id, nombre, img, cantidad}=item
              
              return (
                <article key={id} className='elemento d-flex justify-content-between aling-items-center'>
                  <img src={img} width="100px" alt="" />
                  <h4>{nombre}</h4>
                  <h4>{cantidad}</h4>
                  <div onClick={()=>validarCarrito(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={"eliminar"} viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                    </svg>
                  </div>
                </article>
              )
              
            })
            }
          </section>

          <h2>Total: ${total}</h2>

          <Link className="ir__carrito" to={"/Cart"} onClick={handleClose} >ir a carrito</Link>

          <button className="vaciar__carrito" onClick={()=>{handleClose(); removeList();}} >Vaciar carrito</button>
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
  )
}

export default CartWidget