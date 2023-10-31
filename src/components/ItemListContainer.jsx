import React from 'react'
import './ItemListContainer.scss';
import {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import Loader from './Loader';
const ItemListContainer = ({greeting}) => {

const disenos=[
  {
    id:1,
    nombre:"Naruto",
    categoria:"Anime",
    img:"dragonBall.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  },
  {
    id:2,
    nombre:"River",
    categoria:"Futbol",
    img:"river.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  },
  {
    id:3,
    nombre:"Stitch",
    categoria:"San Valentin",
    img:"stitch.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  },
  {
    id:4,
    nombre:"DBZ",
    categoria:"Anime",
    img:"dragonBall.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  },
  {
    id:5,
    nombre:"Boca",
    categoria:"Futbol",
    img:"boca.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  },
  {
    id:6,
    nombre:"Mickey",
    categoria:"San Valentin",
    img:"mickey.png",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
    precio:2950,
  }
]

const mostrarDisenos= new Promise((resolve,reject)=>{
  if(disenos.length>0){
    setTimeout(()=>{
      resolve(disenos)
    },4000)
  } else{
    reject("No hay diseños")
  }
})

const [verDisenos, setDisenos] = useState([]);
const [loader, setLoader]=useState(true)

  useEffect(() => { 
    mostrarDisenos.then((result) => {
      setDisenos(result);
      setLoader(false) 
    });
  }, []);

  const { categoria } = useParams();

  const filtroCategoria = verDisenos.filter((diseno) => {
    return diseno.categoria == categoria;
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