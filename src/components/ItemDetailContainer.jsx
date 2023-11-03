import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import {doc,getDoc, getFirestore} from 'firebase/firestore';

import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

       const {id}=useParams()
        
        const [verDisenos, setDisenos] = useState([]);
      
        useEffect(() => { 
          
          const db = getFirestore()
          const oneItem= doc(db, "disenos", `${id}`)

          getDoc(oneItem).then((diseno)=>{
            if(diseno.exists()){
              const docs=diseno.data()
              setDisenos(docs)
            }

          })

        }, []); 

      

  return (
    <div>
      
      <ItemDetail verDisenos={verDisenos}/>
    </div>
  )
}

export default ItemDetailContainer