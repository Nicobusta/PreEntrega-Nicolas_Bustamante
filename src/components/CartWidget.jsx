import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CartWidget.scss';
const CartWidget = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>  
      <a onClick={handleShow} className="icon__nav__carrito">
        <svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1" viewBox="0 0 32 32" id="trolley">
            <path d="M24.214,32c-1.817,0-3.296-1.479-3.296-3.296s1.479-3.296,3.296-3.296s3.296,1.479,3.296,3.296S26.031,32,24.214,32z M24.214,27.408c-0.715,0-1.296,0.581-1.296,1.296S23.499,30,24.214,30s1.296-0.581,1.296-1.296S24.929,27.408,24.214,27.408z M13.193,32c-1.817,0-3.296-1.479-3.296-3.296s1.479-3.296,3.296-3.296s3.296,1.479,3.296,3.296S15.011,32,13.193,32z M13.193,27.408c-0.715,0-1.296,0.581-1.296,1.296S12.479,30,13.193,30s1.296-0.581,1.296-1.296S13.908,27.408,13.193,27.408z M27.837,24.55H11.776c-1.606,0-3.031-1.302-3.177-2.901L6.919,3.082C6.867,2.506,6.313,2,5.734,2H2.632c-0.553,0-1-0.447-1-1s0.447-1,1-1h3.103c1.606,0,3.031,1.302,3.177,2.901l0.125,1.385h18.332c1.654,0,3,1.346,3,3v5.897c0,1.587-1.223,3.059-2.784,3.349l-17.151,3.182l0.159,1.754c0.052,0.576,0.605,1.082,1.185,1.082h16.061c0.553,0,1,0.447,1,1S28.39,24.55,27.837,24.55z M9.218,6.286l1.034,11.427l16.967-3.147c0.612-0.113,1.149-0.76,1.149-1.382V7.286c0-0.552-0.448-1-1-1H9.218z"></path>
        </svg>
        <span>0</span>
      </a>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    
    </>
  )
}

export default CartWidget