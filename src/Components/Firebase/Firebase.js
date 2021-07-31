import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyDlxR0ZFDMtpXn9Tp9OmkXhGamo7C0Mq_M",
    authDomain: "ecommerce-react-f0e14.firebaseapp.com",
    projectId: "ecommerce-react-f0e14",
    storageBucket: "ecommerce-react-f0e14.appspot.com",
    messagingSenderId: "308994738112",
    appId: "1:308994738112:web:8aa77ebb20d06459c6ea25"

}

const fb = firebase.initializeApp(firebaseConfig)

export const database = fb.firestore()