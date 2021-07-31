import React, { useContext, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { CartContext } from '../Context/CartContext';
import {database} from '../Firebase/Firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Orders from '../Orders/Orders'
export const CartContainer = () => {

  const [orderId,setOrderId] = useState()
  const [outOfStockArr, setOutOfStockArr] = useState([]);
  const [showForm, setShowForm] = useState(true);

    const {itemsCart, removeItem, subTotal, clear} = useContext(CartContext)

    const itemsToUpdate = database.collection("items")
    .where(firebase.firestore.FieldPath.documentId(), 'in', itemsCart.map(i => i.item.id));
    
  const createOrder = (buyer) => {
    const newOrder = {
        buyer: buyer,
        items: itemsCart,
        date: new Date(),
        total: subTotal
    }
    return newOrder;
  }
  
  
  const addNewOrder = (buyer) => {
    const newOrder = createOrder(buyer);
    const orders = database.collection("orders");
    try {
          orders.add(newOrder).then((doc) => {
          setShowForm(false)
          setOrderId(doc.id);
      })
    } catch(error) {
      console.log("Firebase add doc error:", error);
    }
  }

  const addOrderUpdateItems = (buyer) => {
    
    itemsToUpdate.get().then((querySnapshot) => {
      const batch = database.batch();
      const outOfStock = [];
        querySnapshot.docs.forEach((docSnapshot, idx) => {
            if(docSnapshot.data().stock >= itemsCart[idx].quantity){
                batch.update(docSnapshot.ref, {'stock': docSnapshot.data().stock - itemsCart[idx].quantity});
            } else {
                outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
            }
        })

        if(outOfStock.length === 0){
            batch.commit().then(() => {
                addNewOrder(buyer);         
            });
        } else {
            setOutOfStockArr(outOfStock);
        }
    })
  }

  return<div >
  <div > 
    <TableContainer component={Paper}>
      <Table>
        <TableHead >
          <TableRow>
            <TableCell align="center">Imagen</TableCell>
            <TableCell align="center">Producto</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemsCart.map((item) => (
            <TableRow key={item.item.id}>
              <TableCell component="th" scope="row" align="center">
                  <img src={item.item.img} alt={item.item.alt}  ></img>
              </TableCell>
              <TableCell align="center">{item.item.title}</TableCell>
              <TableCell align="center">{item.quantity}</TableCell>
              <TableCell align="center">$ {item.item.price}</TableCell>
              <TableCell>
                    <IconButton aria-label="delete" onClick={() => removeItem(item.item.id)}>
                      
                    </IconButton>
                </TableCell>
            </TableRow>
          ))}
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell align="center">Total:</TableCell>
          <TableCell  align="center">$ {subTotal}</TableCell>
          <TableCell></TableCell>

        </TableBody>
      </Table>
    </TableContainer>
  </div>

  <div>
    <button onClick={clear}>Vaciar carrito</button>
  </div>
  
  <div >
    {
      showForm ? <Orders addOrder={addOrderUpdateItems}/> : 
      <div >
        <h3 variant="h3">¡Gracias por tu compra!</h3>
        <h3>Código de pedido: {orderId}</h3>  
      </div>

    }
  </div>

</div>
}