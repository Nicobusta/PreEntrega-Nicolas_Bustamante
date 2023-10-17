import React from 'react'

const Item = ({diseno}) => {
  const {id, nombre,img,desc}=diseno
  return (
    <>
      
            <article className="card card--1" key={id}>
                <div className="card__img" style={{backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
                
                <div className="card__img--hover" style={{backgroundImage: 'url(https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}></div>
                
                <div className="card__info">
                  <h3 className="card__title">{nombre}</h3>
                  <p className="card__text">{desc}</p>
                  <button className='card__button mx-auto'>Ver Detalles</button>
                </div>
            </article>  

    </>
  )
}

export default Item