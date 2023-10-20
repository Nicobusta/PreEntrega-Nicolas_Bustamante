import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({diseno}) => {
  const {id, nombre}=diseno
  return (
    <>
      
            <article className="card card--1" key={id}>
                <div className="card__img" style={{backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
                
                <div className="card__img--hover" style={{backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
                
                <div className="card__info">
                  <h3 className="card__title">{nombre}</h3>
                  <Link className="card__link" to={`/diseno/${id}`}>Ver Detalles</Link>
                </div>
            </article>  

    </>
  )
}

export default Item