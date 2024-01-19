import Item from '../Item/Item'; 

const ItemList = ({ data }) => {
  return (
    <div className=''>
      <div className='boxcontenedor'>
      {data.map((productos) => (
        <div key={productos.id}>
          <Item {...productos} />
        </div>
       
      ))}
    </div>
    </div>
  );
};


export default ItemList;
