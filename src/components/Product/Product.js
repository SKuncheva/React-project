import style from "./Product.module.css";
import {Link} from 'react-router-dom';
import {ProductDetail} from '../ProductDetail/ProductDetail'


export const Product = ({_id, imageUrl, title, brand, price,}) => {

  
  return (
    <>
      <div className={style.el}>
        {/* ----------------------------Image product------------------------------ */}
        <div className={style.imgEl}>
          <img src={imageUrl} alt={brand} className={style.img} />
        </div>
        {/* ---------------------------Text product-------------------------------- */}
        <div className={style.text}>
          <Link to={`/products/${_id}`} element={<ProductDetail />}  className={style.title}>
          <h2 className={style.title}>{title}</h2>
          </Link>
          <div className={style.textElements}>
            <p>{brand}</p>
            <p className={style.price}>{price} лв.</p>
          </div>
        </div>

        {/* --------------------------Button like----------------------------------- */}


        <div className={style.button}>
          <i className="far fa-heart" style={{ fontSize: "26px" }} />
        </div>
      </div>
    </>
  );
};
