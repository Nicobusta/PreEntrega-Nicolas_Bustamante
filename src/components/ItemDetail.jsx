import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

const ItemDetail = ({productos}) => {

    
  return (
    <div>
        {
        productos.map((p)=>{ 
            const{id,title,description,thumbnail,price}=p
            return ( 
                <Card style={{ width: '18rem' }} key={id}>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className='w-100 border-0'>{description}</Card.Text>
                        <Card.Title>${price}</Card.Title>
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