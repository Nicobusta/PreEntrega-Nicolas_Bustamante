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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Ingresar email" onChange={(e)=> setEmail(e.target.value)} />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" name="nombre" placeholder="Ingresar nombre" onChange={(e)=> setNombre(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Tu orden: {orderId}</p>
    </>
  );
}

export default Formulario;