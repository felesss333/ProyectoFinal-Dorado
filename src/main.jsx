import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from './data/asynMock.jsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTHDOMAIN ,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

//console.log('se conectó')




// productos.forEach((producto) => {
//  addDoc(collection(db, 'productos'), producto)
//      .then((docRef) => {
//          console.log(`se agregó el documento con id: ${docRef.id}`)
//      })
//      .catch((error) => console.log(error))
//})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
