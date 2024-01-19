import { ImCart } from 'react-icons/im';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <div className='contenedorcarrito col-12 col-lg-2'>
      <ImCart className='carrito' />
      <span className='contadorcarrito mx-2'>{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;
