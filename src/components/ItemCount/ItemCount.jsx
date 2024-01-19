import React from 'react';
import useCounter from '../../hooks/useCounter';

const ItemCount = ({ initialValue, stock, onAdd}) => {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  return (
    <div className="row col-10  mt-4 mx-auto d-flex justify-content-between">
      <hr className='lineadetail1 col-12'/>
      <button type="button" className="botonescounter col-1 btn btn-secondary btn-sm" onClick={decrement}>-</button>
      <p className="contadornumero col-2" style={{ color:'#fff', fontSize:'1.6rem', height:'30px' }}> {count} </p>
      <button type="button" className="botonescounter col-1 btn btn-secondary btn-sm" onClick={increment}>+</button>
      <hr className='lineadetail1 col-12'/>
      <button className="agregarcarrito btn btn-secondary col-12" onClick={()=> onAdd((count))}>Agregar al carro</button>
    </div>
  );
};

export default ItemCount;