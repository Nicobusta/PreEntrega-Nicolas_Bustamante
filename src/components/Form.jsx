import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Formulario() {

 /*  const [email, setEmail] = useState(""); 
  const [pass, setPass] = useState("");
 */
  // Función para manejar los cambios en el formulario

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(formData.email);
    console.log(formData.password);
    console.log(formData);  */
  }

    
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" placeholder="Ingresar email" onChange={handleInputChange} value={formData.email} /* onChange={(e) => setEmail(e.target.value)} */ />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Ingresar password" onChange={handleInputChange} value={formData.password} /* onChange={(e) => setPass(e.target.value)} *//>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Formulario;