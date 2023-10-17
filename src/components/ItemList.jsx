import React from 'react'
import Item from './Item'
import {useState, useEffect} from 'react'
import './card.scss'

const ItemList = ({mostrarDisenos}) => {

  const [disenos, setDisenos] = useState([]);

  useEffect(() => {
    // Dentro de useEffect, podemos manejar la promesa
    mostrarDisenos.then((result) => {
      // Cuando la promesa se resuelve, actualizamos el estado
      setDisenos(result);
    });
  }, [mostrarDisenos]);


  return(
    <>
      <section className="cards">
        { disenos.map((diseno)=>{ 
            return (
              <Item key={diseno.id} diseno={diseno}/>
              
            )
          })  
        }
      </section>
    </> 
  )

}

export default ItemList