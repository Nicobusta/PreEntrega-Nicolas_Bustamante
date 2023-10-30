import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const disenos=[
    {
      id:1,
      nombre:"Naruto",
      categoria:"Anime",
      img:"dragonBall.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    },
    {
      id:2,
      nombre:"River",
      categoria:"Futbol",
      img:"river.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    },
    {
      id:3,
      nombre:"Stitch",
      categoria:"San Valentin",
      img:"stitch.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    },
    {
      id:4,
      nombre:"DBZ",
      categoria:"Anime",
      img:"dragonBall.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    },
    {
      id:5,
      nombre:"Boca",
      categoria:"Futbol",
      img:"boca.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    },
    {
      id:6,
      nombre:"Mickey",
      categoria:"San Valentin",
      img:"mickey.png",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    }
  ]
      
      const mostrarDisenos= new Promise((resolve,reject)=>{
        if(disenos.length>0){
          setTimeout(()=>{
            resolve(disenos)
          },2000)
        } else{
          reject("No hay diseños")
        }
      })
      
      const [verDisenos, setDisenos] = useState([]);
      
        useEffect(() => { 
          mostrarDisenos.then((result) => {
            setDisenos(result);
          });
        }, []);

  return (
    <div>
      <ItemDetail verDisenos={verDisenos}/>
    </div>
  )
}

export default ItemDetailContainer