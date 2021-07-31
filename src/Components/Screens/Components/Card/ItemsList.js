import React from 'react'
import Items from './Item'

export const ItemList = props =>{
    const {info}= props
    console.log(info)
    return<>
        
    
  {info.map((producto)=>
  <Items key={producto.id}
  producto={producto}/>)}
    </>
}
