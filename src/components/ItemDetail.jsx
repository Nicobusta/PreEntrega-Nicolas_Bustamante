import React, { Suspense } from 'react'
import ItemCount from './ItemCount';
import Scene from './SceneDetail';
import "./ItemDetail.scss"

const ItemDetail = ({verDisenos}) => {

  const{nombre,desc,precio}=verDisenos

  return (
    <div className={'detalle'}>
      <section className={"container__detail"}>
        <article className={"wrapper__detail"}>
          <Suspense fallback={null}> 
            <Scene />
          </Suspense>
        </article>
      </section> 
      <section className={"descripcion d-flex flex-column justify-content-center align-items-center"}>
          <h1 className={"fs-1"}>{nombre}</h1>
          <p className={"fs-4"}>{desc}</p>
          <h4 className={"fs-1"}>${precio}</h4>
          <ItemCount verDisenos={verDisenos}/> 
      </section>
                    
    </div>
  )
}

export default ItemDetail