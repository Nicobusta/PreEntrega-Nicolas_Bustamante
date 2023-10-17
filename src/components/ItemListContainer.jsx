import React from 'react'
import './ItemListContainer.scss';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
const disenos=[
  {
    id:1,
    nombre:"Anime",
    img:"https://drive.google.com/file/d/1w5wSx2Q3FcXnlK1SxI5_Z820X2Y1Ypa4/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:2,
    nombre:"Futbol",
    img:"https://drive.google.com/file/d/17uIkrgkdRSV3Em42rmI0LnW9NcxdZ32T/view?usp=sharing",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.",
  },
  {
    id:3,
    nombre:"San Valentin",
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


  return (
    <>
         <h1>{greeting}</h1>
           
        <ItemList mostrarDisenos={mostrarDisenos} />
    
    
    
        
    </>
  )
}

export default ItemListContainer