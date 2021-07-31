import React,{useEffect,useState} from 'react';
import { useParams} from 'react-router-dom';
import { ItemList } from './ItemsList';
import {database} from '../../../Firebase/Firebase'

const estilo ={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    lignItems: 'baseline',
    alignItems: 'flex-end',
}

   export const ItemListContainer =()=>{

    const {categoryID}= useParams()

       const [info,setData] = useState([])
       useEffect(() =>{
           
            const itemCollection = database.collection("items");
           let filtroProductos 
           if(categoryID !== undefined && categoryID !==null){
               filtroProductos= itemCollection.where('category', '==', categoryID).get()
           }else{
               filtroProductos = itemCollection.get()
           }
           filtroProductos.then((response)=>{
               let filtrar =[]
              response.forEach((doc)=>{
                  filtrar.push({id : doc.id, ...doc.data()})
              })
              if(filtrar.size === 0){
                  console.log("vacio")
              }
               setData(filtrar)
           })

        },[categoryID])
     return <div style={estilo}>
        <ItemList info = {info}/>  
    </div>
    }
