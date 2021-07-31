import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext'
import { CartMessage } from './CartMessage';
import { CartContainer} from './CartContainer';

export const Cartview = () => {
    const {itemsCart} = useContext(CartContext)

    return<>
      {
        itemsCart.length === 0 ? <CartMessage/> : <CartContainer/>
      }
    </>

}