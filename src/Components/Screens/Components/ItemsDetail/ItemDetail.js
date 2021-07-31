import React,{useContext} from "react";
import {ItemStyle} from './ItemStyle'
import { makeStyles } from "@material-ui/core";
import Countbutton from "../../../CountButton/CountButton";
import {useState} from 'react'
import { CartContext } from "../../../../Components/Context/CartContext";
import "./itemStyle.css"
const useStyles = makeStyles ((theme)=> ItemStyle(theme))

export const ItemDetail = props =>{

    const {details} = props

const classes = useStyles()
const [cantidad, setCantidad] = useState(0)
 const [click, setClick] = useState(false)
 const {addItem, removeItem} = useContext(CartContext)
    
    const onAdd = cantidad => {
        setCantidad(cantidad); 
        setClick(true);
        addItem({item: details, quantity: cantidad}) 
    }
   
    return <section className={classes.contenedor}>
        <h3 className={classes.titulo}>{details.title}</h3>
        <div className={classes.content}>
        <img className={classes.img} src={details.img} alt={details.alt}/>
        <div className={classes.details}>
        <p>${details.price}</p>
        <p>{details.descripcion}</p>
        <Countbutton className="buttons" stock={details.stock} valorInicial={0}  cantidad={cantidad} onAdd={onAdd}/>      
        </div>
        </div>
    </section>   
}
