import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({verDisenos}) => {

  const {id}=useParams()

  const detalle = verDisenos.filter((diseno)=>{
    return diseno.id == id
  })
   
  return (
    <div>
      
        {
        detalle.map((diseno)=>{ 
          const {id, nombre, img,desc}=diseno
            return ( 
                <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text className='w-100 border-0'>{desc}</Card.Text>
                        
                        <ItemCount/>
                        <Button>Agregar al carrito</Button>
                    </Card.Body>
                </Card>  
            )
          })  
         
       }
    </div>
  )
}

export default ItemDetail