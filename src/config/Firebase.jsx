// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { productos }  from "../data/asynMock/";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
VITE_FIREBASE_APIKEY=AIzaSyDEzWR1f412J_y0L0z3mGMPm5VV6o_a-w0
VITE_FIREBASE_AUTHDOMAIN=tiendaquebble.firebaseapp.com
VITE_FIREBASE_PROJECTID=tiendaquebble
VITE_FIREBASE_STORAGEBUCKET=tiendaquebble.appspot.com
VITE_FIREBASE_MESSAGINGSENDERID=575435622453
VITE_FIREBASE_APPID=1:575435622453:web:b8cdaf438c658b38f5097c
};

console.log('config se conectó')

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


// productos.forEach((producto) => {
//     addDoc(collection(db, 'productos'), producto)
//         .then((docRef) => {
//             console.log(`se agregó el documento con id: ${docRef.id}`)
//         })
//         .catch((error) => console.log(error))
// })
