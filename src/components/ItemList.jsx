import React from 'react'
import Item from './Item'
import './card.scss'

const ItemList = ({verDisenos}) => {
  
  return(
    <>
      <section className="cards">
        { verDisenos.map((diseno)=>{ 
          
            return (
              <Item key={diseno.id} diseno={diseno}/>
              
            )
          })  
        }
      </section>
    </> 
  )

}

export default React.memo(ItemList)