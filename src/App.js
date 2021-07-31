import React from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar/NavBar"
import {ItemListContainer} from './Components/Screens/Components/Card/ItemsListContainer'
import { ItemDetailContainer } from './Components/Screens/Components/ItemsDetail/ItemDetailContainer'
import { CartContextCom } from './Components/Context/CartContext';
import { Cartview } from './Components/CartContainer/Cartview';
import Footer from './Components/Footer/Footer';


  function App () {
  return (
    <CartContextCom>
    <BrowserRouter>
    <NavBar/>
    <Switch>
     <Route exact path="/">
       <ItemListContainer/>
       <Footer/>
    </Route>  
       <Route exact path="/category/:categoryID">
       <ItemListContainer/>
    </Route> 
       <Route exact path="/id/:Id" >
       <ItemDetailContainer/>
    </Route> 
    <Route exact path="/cart">
        <Cartview/>
     </Route>
    </Switch>
     </BrowserRouter>
     </CartContextCom>
  );
  }

export default App;