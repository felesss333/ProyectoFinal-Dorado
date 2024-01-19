import React, { useEffect } from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImage from './assets/header2.jpg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

function App() {


  return (
    <div className="cuerpo">
      <img className="imagehome" src={HeaderImage} alt="Header" />
      <CartContextProvider>
        <BrowserRouter>
          <NavBar className="navbar" />
          <hr className="linea2" />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />            
            <Route path={'/product/:ItemId'} element={<ItemDetailContainer />} />
            <Route path={'/category/:categoryId'} element={<ItemListContainer />} />
            <Route path={'/cart'} element={<Cart />} />
            <Route path={'/checkout'} element={<Checkout />} />
          </Routes>
        </BrowserRouter>
        <Footer className='footer'></Footer>
      </CartContextProvider>
    </div>
  );
}

export default App;
