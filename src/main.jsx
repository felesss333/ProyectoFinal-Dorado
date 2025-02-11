import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { productos } from './data/asynMock.jsx';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const fetchProductsOnce = async () => {
  const querySnapshot = await getDocs(collection(db, 'productos'));
  if (querySnapshot.empty) {
    // Si la colección está vacía, agregamos los productos
    productos.forEach((producto) => {
      addDoc(collection(db, 'productos'), producto)
        .then((docRef) => {
          console.log(`Se agregó el documento con id: ${docRef.id}`);
        })
        .catch((error) => console.log(error));
    });
  } else {
    console.log('Productos ya existen en la base de datos.');
  }
};

const AppWithProducts = () => {
  useEffect(() => {
    fetchProductsOnce(); // Llamamos una vez al inicio
  }, []); // El array vacío asegura que solo se ejecute una vez al montar

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithProducts />
  </React.StrictMode>
);
