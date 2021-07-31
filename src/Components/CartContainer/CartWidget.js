import React from 'react'
import {CartContext} from '../../Components/Context/CartContext'
import { useContext } from 'react';
import { Badge } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';



const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      backgroundColor: '#ffffff',
      color: '#5c4000'
    },
  }))(Badge);

 const Carrito = ()=>{
     const estilo ={
         width : 30
      }
      const {itemsQuantity} = useContext(CartContext)
    return(
        <>
                <StyledBadge badgeContent={itemsQuantity}>

        <img src="https://www.nadaincluido.com/wp-content/uploads/carritou.png" style={estilo}/>
        
            </StyledBadge>
        
        
        
        </>
    )
}

export default Carrito