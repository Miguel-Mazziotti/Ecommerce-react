import React from 'react'
import {makeStyles} from '@material-ui/core'
import {CardStyle} from './CardStyle'
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => CardStyle(theme));
 const Item = props =>{
 const { producto } = props
const classes = useStyles()

  const style ={
    textDecoration: 'none',
    color:'black',
    borderRadius:'8px',
    border:'2px solid #008CBA',
    fontSize:'20px'
  }

    return<div className={classes.content} >
        <div className={classes.card}>
        <h3 >{producto.title} </h3> 
         <img className={classes.imagenes} src={producto.img} alt={producto.alt}/>
         <p >${producto.price}</p>
         <Link style={style} to={`/id/${producto.id}`}>Agregar al Carrito</Link> 
         </div>  
    </div>
}

export default Item