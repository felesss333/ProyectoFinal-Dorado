import React, { useContext } from "react";
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaArrowAltCircleLeft } from "react-icons/fa";


const Cart = () => {
  const { cart, getTotal, removeSingleItem, removeItem, increaseSingleItem, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

 if(cart.length === 0) {
    return(
      <div className="col-10 mx-auto col-lg-12 align-items-center justify-content-center mb-5">
        <h1 className="carritosinnada">¡Todavía no agregaste productos al carrito!</h1>
        <hr className="linea1 col-6 my-0 mx-auto"></hr>
        <button className="continuarcompra mt-4" onClick={() => { navigate('/')}}> <FaArrowAltCircleLeft /> Volver a los productos</button>
      </div>
    )
  }else{

  return (
    <div>
      <div className="tabletable col-12 mx-auto align-items-center justify-content-center">
        <table className="table table-dark table-striped align-items-center justify-content-center">
          <thead>
            <tr>
              <th className="" scope="col">Cantidad</th>
              <th className="" scope="col-lg col-3">Banda / Disco</th>
              <th className="" scope="col-lg col-3">Categoria</th>
              <th className="" scope="col-lg col-3">Precio x Unidad</th>
              <th className="removerproductosimplecol" scope="col">Subtotal</th>
              <th className="removerproductosimplecol" scope="col"></th>
              
            </tr>
          </thead>
          <tbody className="" key={'cart-tbody'}>
            {cart.map((prod, index,) => (
              <tr key={prod.id !== undefined ? prod.id : index}>
                <td className="align-items-center justify-content-center d-flex">
                 <button className="subirybajar" onClick={() => removeSingleItem(prod.id)}>-</button>
                
                <p className="mx-3" >{prod.quantity}</p>

                <button className="subirybajar" onClick={() => increaseSingleItem(prod.id)}>+</button>
                </td>

                <td>{prod.banda} / {prod.disco}</td>
                <td>{prod.categoria}</td>
                <td>u$s {prod.precio}</td>
                <td className="removerproductosimplecol">{'u$s ' + (prod.quantity * prod.precio).toFixed(2)}</td>
                <td className="removerproductosimplecol">
                  
                  <button className="subirybajar1" onClick={() => removeItem(prod.id)}>X</button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="linea1" />
          <div className="row col-12 text-end mt-2 mx-auto d-flex justify-content-end">
            <p className="totalfinal col-12 mt-2">u$s {getTotal().toFixed(2)}</p>
            <hr className="linea1 mb-4" />
            <div className="row justify-content-end">
            <button className='continuarcompra col-5 col-lg-2'
            onClick={() => {
              navigate('/checkout');
            }}
             >
            <FaCheckCircle  className="FaCheckCircle" />

            Procesar Compra
          </button>
            <button className="vaciarcarroprecompra col-5 col-lg-2" onClick={clearCart}> 
            <FaTimesCircle  className="FaTimesCircle" />
            Vaciar Carrito</button>
            </div>
            
        </div>
      </div>
    </div>
  );
}
}

export default Cart;
