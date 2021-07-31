import React, { useState } from 'react';
import {Link} from 'react-router-dom'

 const Countbutton = props => {
    const {stock, valorInicial, onAdd} = props;
    const botones ={  
            backgroundColor: 'white',
            color: 'black',
            border:"2px solid #008CBA",
            textDecoration:'none',
            borderRadius:'16px',
            fontSize: '1rem '    
    }
    const [count, setCount] = useState(0);


    const handleChangeCount = () => {
        setCount(count+1);
    }
    const handleChangeDiscount = () => {
        setCount(count-1);
    }
    return<div> 
        <h4>{count}</h4>
       <button style={botones} onClick={e => handleChangeCount()} disabled={count < stock ? false : true}>+</button>
       <button style={botones}  onClick={e => handleChangeDiscount()} disabled={count === valorInicial ? true : false}>-</button>
       <Link to="/cart"> <button style={botones} onClick={() => onAdd(count)}
                    disabled={stock === 0 ? true : false}>comprar</button></Link>
    </div>
}
export default Countbutton