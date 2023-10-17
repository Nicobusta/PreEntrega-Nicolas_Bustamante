import React from 'react'
import {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const getProdutcs= async() =>{
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        return data.products
    }

const [productos, setProductos] = useState([])

useEffect(() => {
    getProdutcs().then((p) => {
        setProductos(p)
    })
}, [])

  return (
    <div>
        <ItemDetail productos={productos}/>
    </div>
  )
}

export default ItemDetailContainer