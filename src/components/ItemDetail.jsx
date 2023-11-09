import React, { Suspense } from 'react'
import ItemCount from './ItemCount';
import Scene from './SceneDetail';
import "./ItemDetail.scss"
import { useContext } from 'react'
import { CartContext } from '../context/ShoppingCartContext';

const ItemDetail = ({verDisenos}) => {

  const {setImg} = useContext(CartContext);

  const{nombre,img,desc,precio}=verDisenos
  const cargarImagen=()=>{ 
    setImg(img)
  } 

  return (
    <div onLoad={setImg(img)} className={'detalle'}>
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