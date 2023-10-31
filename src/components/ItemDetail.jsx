import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';

/* const imagenes = require.context('../assets/img', true) */
const ItemDetail = ({verDisenos}) => {

  const {id}=useParams()

  const detalle = verDisenos.filter((diseno)=>{
    return diseno.id == id
  })
 

  return (
    <div>
      
        {
        detalle.map((diseno)=>{ 
          const {id, nombre, img,desc,precio}=diseno
            return ( 
                <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img variant="top" src={`/img/${img}`} /> 
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text className='w-100 border-0'>{desc}</Card.Text>
                        <Card.Title>{precio}</Card.Title>
                        <ItemCount diseno={diseno}/>
                    </Card.Body>
                </Card>  
            )
          })  
         
       }
    </div>
  )
}

export default ItemDetail