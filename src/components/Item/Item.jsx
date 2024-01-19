import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const Item = ({ id, banda, disco, avatar, categoria, año, }) => {
  return (
    <div className="singlecart">
      <p className="nombrebanda">{banda}</p>
      <div className="imagencart">
        <div className="imagencart-container">
          <img src={avatar} alt="Descripción de la imagen" />
        </div>
      </div>
      <p className="discobanda b-0">{disco}</p>
      <div className="semicontenedor row col-12 mx-auto pt-1 mb-3">
        <div className="col-6">
          <p className="littledetails mb-0">Formato: {categoria}</p>
        </div>
        <div className="col-6 text-right">
          <p className="littledetails mb-0">Año: {año}</p>
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <button className="masinfo col-6 col-lg-4 mx-auto">+ Info</button>
      </Link>
  
    </div>
  );
};

export default Item;
