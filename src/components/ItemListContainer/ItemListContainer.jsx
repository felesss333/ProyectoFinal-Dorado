import ItemList from '../ItemList/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../config/Firebase'
import { getProductById } from '../../data/asynMock'


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const { categoryId } = useParams()

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {

        const queryRef = !categoryId ? collection(db, 'productos') : 
        query(collection(db, 'productos'), where('categoria', '==', categoryId))
        
        const response = await getDocs(queryRef)

        const products = response.docs.map((doc) => {
            const newProduct = {
                ...doc.data(), 
                id: doc.id
            }
            return newProduct
        })
        setTimeout(() => {
            setData(products)
            setIsLoading(false)
        },1000)
    }
    getData()
}, [categoryId])

  return (
    <div>
      <LoaderComponent loading={isLoading} />
      {!isLoading &&  <ItemList data={data} />
      }
    </div>
  );
};

export default ItemListContainer;
