import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({diseno}) => {
  const {nombre, img}=diseno.data

  return (
    <>
      
            <article className="card card--1" key={diseno.id}>
                <div className="card__img" style={{backgroundImage: `url(${img})`}}></div>
                
                <div className="card__img--hover" style={{backgroundImage: `url(${img})`}}></div>
                
                <div className="card__info">
                  <h3 className="card__title">{nombre}</h3>
                  <Link className="card__link" to={`/diseno/${diseno.id}`}>Ver Detalles</Link>
                </div>
            </article>  

    </>
  )
}

export default Item