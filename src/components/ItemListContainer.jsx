import React from 'react'
import './ItemListContainer.scss';
import {useState, useEffect} from 'react'
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
const ItemListContainer = ({greeting}) => {

const disenos=[
  {
    id:1,
    nombre:"Naruto",
    categoria:"Anime",
    img:"https://drive.google.com/file/d/1w5wSx2Q3FcXnlK1SxI5_Z820X2Y1Ypa4/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:2,
    nombre:"River",
    categoria:"Futbol",
    img:"https://drive.google.com/file/d/17uIkrgkdRSV3Em42rmI0LnW9NcxdZ32T/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:3,
    nombre:"Stitch",
    categoria:"San Valentin",
    img:"https://drive.google.com/file/d/1szTt7B5g7er0lQt4JzydcobjJlUDNXrs/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:4,
    nombre:"DBZ",
    categoria:"Anime",
    img:"https://drive.google.com/file/d/1w5wSx2Q3FcXnlK1SxI5_Z820X2Y1Ypa4/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:5,
    nombre:"Boca",
    categoria:"Futbol",
    img:"https://drive.google.com/file/d/17uIkrgkdRSV3Em42rmI0LnW9NcxdZ32T/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:6,
    nombre:"Mickey",
    categoria:"San Valentin",
    img:"https://drive.google.com/file/d/1szTt7B5g7er0lQt4JzydcobjJlUDNXrs/view?usp=sharing",
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

  const { categoria } = useParams();

  useEffect(() => {
    if (categoria != undefined) {
      const filtroCategoria = disenos.filter((diseno) => {
        return diseno.categoria == categoria;
      });
      setDisenos(filtroCategoria);
    }else{
      setDisenos(disenos);
    }
  }, [categoria]);
 
  
  

  return (
    <>
         <h1>{greeting}</h1>
           
        <ItemList verDisenos={verDisenos} /> 
    
    
    
        
    </>
  )
}

export default ItemListContainer