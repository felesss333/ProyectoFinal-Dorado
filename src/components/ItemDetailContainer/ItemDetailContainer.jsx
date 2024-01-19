import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../main'

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { ItemId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const getProducts = async() => {
      const queryRef = doc(db, 'productos', ItemId)

      const response = await getDoc(queryRef)

      const newProduct = {
        id: response.id,
        ...response.data()        
      }

      setTimeout(() =>{
        setProduct(newProduct)
        setIsLoading(false)
      }, 500)
    }
    getProducts()
  }, [ItemId]);

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow text-light" style={{ width: '7rem', height: '7rem', marginTop: '7rem' }} role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
