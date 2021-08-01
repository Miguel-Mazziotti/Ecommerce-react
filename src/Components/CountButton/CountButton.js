import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import { buttonStyle } from './buttonStyle';

const useStyles = makeStyles((theme) => buttonStyle(theme));

 const Countbutton = props => {
const classes = useStyles()
    const {stock, valorInicial, onAdd} = props;
    const botones ={  
            backgroundColor: 'white',
            color: 'black',
            paddingLeft:'1rem',
            fontSize: '1rem ' ,
            border:"2px solid #008CBA",
            display:'flex', 
            borderRadius:'2rem'  
    }
    const espacio ={
        paddingLeft:'2rem'
    }
    const [count, setCount] = useState(0);


    const handleChangeCount = () => {
        setCount(count+1);
    }
    const handleChangeDiscount = () => {
        setCount(count-1);
    }
    return<div> 
        <div className={classes.content}>
        <h4>{count}</h4>
        <div className={classes.buttons}>
       <button style={botones} onClick={e => handleChangeCount()} disabled={count < stock ? false : true}>+</button>
       <button style={botones}  onClick={e => handleChangeDiscount()} disabled={count === valorInicial ? true : false}>-</button>
       </div>
       <Link className={classes.lnk} to="/cart"> <button className={classes.compra} onClick={() => onAdd(count)}
                    disabled={stock === 0 ? true : false}>comprar</button></Link>
                    
                    </div>
    </div>
}
export default Countbutton