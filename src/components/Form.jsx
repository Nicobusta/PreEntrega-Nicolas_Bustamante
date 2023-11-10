import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import { addDoc,collection, getFirestore } from 'firebase/firestore';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Formulario() {

  const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState(""); 
  const [orderId, setOrderId] = useState("");

  const db=getFirestore();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: `Desea Finalizar la compra?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si"
    }).then((result) => {
      if (result.isConfirmed) {
        
        addDoc(ordersCollection, order).then(({id}) => {
          setOrderId(id);
        })/* .then(() => {
          
            Swal.fire(`Gracias por su compra, tu orden de compra es: ${orderId}`)
            .then(() => {
              navigate("/")
            })
        }) */
        
         
      }
    });
    
      useEffect(() => {
        Swal.fire(`Gracias por su compra, tu orden de compra es: ${orderId}`)
            .then(() => {
              navigate("/")
            })
      }, [orderId]);
      
  }

  const order={
    nombre,
    email,
  }
  const ordersCollection=collection(db,"orders");  

  return (
    <>
      <Form className="d-flex flex-column w-50 mx-auto mb-5" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" name="nombre" placeholder="Ingresar nombre" onChange={(e)=> setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" name="email" placeholder="Ingresar email" onChange={(e)=> setEmail(e.target.value)} />
        </Form.Group>
        <Button className="btn__form w-50 mx-auto" type="submit">
          Finalizar compra
        </Button>
        
      </Form>
    </>
  );
}

export default Formulario;