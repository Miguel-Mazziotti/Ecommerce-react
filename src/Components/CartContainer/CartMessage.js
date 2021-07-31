import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export const CartMessage = () =>{


    const history = useHistory();

    return<div >
        <h3  variant="h3">No hay artículos en el carrito.</h3> 
        <div >
            <Link  onClick={() => history.push(`/`)}>Volver a la tienda</Link>
        </div>
    </div>
}