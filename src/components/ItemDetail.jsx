import React, { Suspense } from 'react'
import ItemCount from './ItemCount';
import Scene from './SceneDetail';
import "./ItemDetail.scss"
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';

const ItemDetail = ({verDisenos}) => {

  const {setImg} = useContext(CartContext);

  const{nombre,img,desc,precio}=verDisenos 
 setImg(img)
  return (
    <div className={'detalle'}>
      <section className={"container__detail"}>
        <article className={"wrapper__detail"}>
          <Suspense fallback={null}> 
            <Scene />
          </Suspense>
        </article>
      </section> 
      <section className={"descripcion"}>
          <h1>{nombre}</h1>
          <p>{desc}</p>
          <h4>${precio}</h4>
          <ItemCount verDisenos={verDisenos}/> 
      </section>
                    
    </div>
  )
}

export default ItemDetail