import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail'
import {database} from '../../../Firebase/Firebase'
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = props => {
const {Id} = useParams()
    const [details, setDetails] = useState([])
    
    useEffect(() =>{
        const itemCollection = database.collection("items");
        const item = itemCollection.doc(Id)

        item.get().then((doc) =>{
            if (!doc.exists){
                console.log('No existe')
                return;
            }
            setDetails([{id: doc.id, ...doc.data()}])
        }).catch((error) =>{
            console.log('Error', error)
        })
    }, [])
    return<>
        {details.map((detalle,i)=><ItemDetail details ={detalle} key={i}/>)
        }   
    </>
}