import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { addDoc,collection, getFirestore } from 'firebase/firestore';

function Formulario() {

  const [nombre, setNombre] = useState("");
   const [email, setEmail] = useState(""); 
  const [orderId, setOrderId] = useState("");

  const db=getFirestore();

  
  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(ordersCollection, order).then(({id}) => {
      setOrderId(id);
    })
  }

  const order={
    nombre,
    email,
  }
  const ordersCollection=collection(db,"orders");

  return (
    <>
      <Form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" onChange={(e)=> setNombre(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Ingresar email" onChange={(e)=> setEmail(e.target.value)} />
        </Form.Group>
        <Button className="btn__form w-50 mx-auto" type="submit">
          Enviar
        </Button>
        <p>Tu orden: {orderId}</p>
      </Form>
    </>
  );
}

export default Formulario;