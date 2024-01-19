import React, { createContext, useState } from "react";
import Swal from 'sweetalert2';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    const existingItem = cart.find((item) => item.id === productToAdd.id);

    const newObj = {
        ...productToAdd,
        quantity: Math.min(quantity, productToAdd.stock),
    };

    if (existingItem) {
        const carritoActualizado = cart.map((el) => {
            if (el.id === newObj.id) {
                el.quantity = Math.min(el.quantity + newObj.quantity, productToAdd.stock);
            }
            return el;
        });
        setCart(carritoActualizado);
    } else {
        setCart([...cart, newObj]);
    }
};


  const getTotal = () => {
    const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    return total
  }

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const clearCart =() => {
    setCart([])
  }

  const getQuantity = () =>{
    let count = 0
    cart.forEach((el) =>{
      count = count + el.quantity
    })
    return count
  }
  

  const removeSingleItem = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    }).filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const increaseSingleItem = (id) => {
    const existingItem = cart.find((item) => item.id === id);
  
    if (existingItem && typeof existingItem.stock !== 'undefined') {
      if (existingItem.quantity + 1 <= existingItem.stock) {
        const updatedCart = cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updatedCart);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-start",
          timer: 7000,
          showConfirmButton: false,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        
        Toast.fire({
          icon: "error",
          html:`Has agregado el máximo disponible en stock de: </br> <b>${existingItem.banda} - ${existingItem.disco}<b>`
        });
      }
    }
  };
  
  return (
    <CartContext.Provider value={{ cart, clearCart, setCart, addItem, getTotal, removeItem, removeSingleItem, increaseSingleItem, getQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


export default CartContext;

