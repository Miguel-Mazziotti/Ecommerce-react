import React, { useState } from "react";
import { dataBase } from '../Firebase/Firebase';
import firebase from "firebase/app";
import "firebase/firestore";

export const Form = ({ itemsCart, itemsPrice, clear }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [mailConfirmation, setMailConfirmation] = useState("");
  const [orderNumber, setOrderNumber] = useState("");

  const createOrder = (e) => {
    e.preventDefault();

    const buyer = {
      name: name,
      phone: phone,
      mail: mail,
    };

    const itemsToUpdate = dataBase.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cartItems.map((i) => i.item.id)
    );

    itemsToUpdate.get().then((querySnapshot) => {
      const batch = dataBase.batch();
      const outOfStock = [];

      querySnapshot.docs.forEach((docSnapshot, id) => {
        if (docSnapshot.data().stock >= itemsCart[id].quantity) {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - itemsCart[id].quantity,
          });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      });

      if (outOfStock.length === 0) {
        const newOrderReference = dataBase.collection("orders").doc();

        const orderItems = cartItems.map((item) => {
          return {
            id: item.item.id,
            title: item.item.name,
            price: item.item.price,
            qty: item.quantity,
          };
        });

        batch.set(newOrderReference, {
          buyer: buyer,
          items: orderItems,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: itemsPrice,
        });
        batch.commit().then(() => {
          dataBase
            .collection("orders")
            .orderBy("date", "desc")
            .limit(1)
            .get()
            .then((querySnapshot) => {
              setOrderNumber(querySnapshot.docs[0].id)
              setRedirect(true);
              clear();
            });
        });
      }
    });
  };

  return<>
     (
        <form onSubmit={createOrder}>
          <p>
            <label>Nombre:</label>
            <br></br>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Pedro Sanchez"
              id="name"
              type="text"
              autoComplete="name"
              enterKeyHint="next"
              required
              autoFocus
            />
          </p>
          <p>
            <label>Tel??fono:</label>
            <br></br>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+54 911 68228048"
              id="phone"
              type="tel"
              autoComplete="phone"
              enterKeyHint="next"
            />
          </p>
          <p>
            <label>Mail:</label>
            <br></br>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="hola@plantae.com "
              id="mail"
              type="email"
              autoComplete="email"
              enterKeyHint="next"
            />
          </p>
          <p>
            <label>Confirmar Mail:</label>
            <br></br>
            <input
              value={mailConfirmation}
              onChange={(e) => setMailConfirmation(e.target.value)}
              placeholder="hola@plantae.com "
              id="mail"
              type="email"
              autoComplete="email"
              enterKeyHint="done"
            />
          </p>
          <button
            className="formButton"
            type="submit"
            disabled={
              name === "" ||
              phone === "" ||
              mail === "" ||
              mailConfirmation !== mail
            }
          >
            Finalizar Compra
          </button>
        </form>
      )
    </>
}