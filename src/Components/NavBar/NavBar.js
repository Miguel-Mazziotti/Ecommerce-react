import React from 'react';
import {makeStyles} from '@material-ui/core'
import {navbarStyle} from './navbarStyle'
import { Link } from 'react-router-dom';
import "./navbar.css"
import Carrito from '../CartContainer/CartWidget'

const useStyles = makeStyles((theme) => navbarStyle(theme));
 const NavBar = ()=>{
   const referencias = {
    display: 'flex',
    alignItems: 'center',
    color: 'black'
   }

  const classes = useStyles ()
  const buzos = "buzos"
  const remeras = "remeras"
  const zapatillas = "zapatillas"
  const pantalones = "pantalones"
    return ( <>
    <nav className={classes.links}>
      <Link  to={"/"} className={classes.inicio}>Just do it</Link>
      <div style={referencias}>
      <Link className={classes.active} to={"/category/"+buzos}>Buzos</Link>
       <Link to={"/category/"+remeras}>Remeras</Link>
       <Link to={"/category/"+zapatillas}>Zapatillas</Link>
       <Link to={"/category/"+pantalones}>Pantalones</Link>
        <Link to ={"/cart"}>  <Carrito/>   </Link>      
         </div>  
       </nav>
     </>
   )
  
};
export default NavBar
