import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@material-ui/core';


 const Orders = props => {

    const [buyerData, setBuyerData] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setBuyerData({ ...buyerData, [name]: value });        
    }
    
    const submitForm = event => {
        event.preventDefault();
        props.addOrder(buyerData);
    }

    return <Card variant="outlined" >
        <CardContent >
            <form onSubmit={submitForm}>
                <TextField id="standard-full-width" fullWidth name="nombre" label="Nombre" required onChange={handleChange}/>
                <TextField id="standard-full-width" fullWidth name="apellido" label="Apellido" required onChange={handleChange}/>
                <TextField id="standard-full-width" fullWidth name= "calle" label="Calle" required onChange={handleChange} />
                <TextField id="standard-full-width" fullWidth name="numero" label="Número" required onChange={handleChange} />                
                <TextField id="standard-full-width" fullWidth name= "telefono" label="Teléfono" required onChange={handleChange}  />
                <TextField id="standard-full-width" fullWidth label="Email" name= "email" required onChange={handleChange} />
                <Button type='submit' >ACEPTAR</Button>    
            </form>
        </CardContent>
    </Card>
}
export default Orders