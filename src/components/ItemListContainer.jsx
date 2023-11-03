import React from 'react'
import './ItemListContainer.scss';
import {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Loader from './Loader';

import {collection, getDocs, getFirestore} from 'firebase/firestore'

const ItemListContainer = ({greeting}) => {
  
  const [verDisenos, setDisenos] = useState([]);
  const [loader, setLoader]=useState(true)

  useEffect(()=>{
    const db=getFirestore()

    const itemsCollection= collection(db, "disenos")

    getDocs(itemsCollection).then((diseno)=>{

      /* const docs=diseno.docs.map((doc)=>doc.data()) */

      const docs = diseno.docs.map((doc) => ({
        id: doc.id, // Agregamos la ID del documento
        data: doc.data(), // Agregamos los datos del documento
      }));
      
      setDisenos(docs)
      setLoader(false) 
    })
  },[])


  const { categoria } = useParams();

  const filtroCategoria = verDisenos.filter((diseno) => {
    return diseno.data.categoria == categoria;
  });
  

//controla el loader
  if(loader){
    return <Loader/>
  }


  return (
    <>
         <h1>{greeting}</h1>
          { categoria ? <ItemList verDisenos={filtroCategoria} /> : <ItemList verDisenos={verDisenos}/>}
           
    </>
  )
}

export default ItemListContainer