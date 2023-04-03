import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as details from "../../services/productDetalService";
import style from "./ProductDetail.module.css";
import { UserAuthenticate } from "../../context/context";
import { useContext } from "react";

export const ProductDetail = () => {
  const {authenticate}=useContext(UserAuthenticate)
  
  const [currentProduct, setCurrentProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    details.product(id).then((product) => {
      setCurrentProduct(product);
      // console.log(product);
    });
  }, [id]);

  const onClikBuyButton=()=>{}

  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <h1 className={style.title}>{currentProduct[0]}</h1>
        <p className={style.subTitle}>{currentProduct[1]}</p>
        <p className={style.textEl}>{currentProduct[2]}</p>
{/* -------------------------Buy------------------------------ */}
        <div className={style.buy}>
          <p>{currentProduct[3]} мл.</p>
          <input type="text" placeholder="бр." className={style.number} />
          <p className={style.price}>
            {currentProduct[7]} <span>лв.</span>
          </p>
        </div>
      </div>

     {authenticate.accessToken && (
      <div className={style.buttonWrapper}>
        <button className={style.button} onClick={onClikBuyButton}>Купи</button>
      </div>)}
{/* ------------------------- Image----------------------- */}
      <div className={style.imgWrapper}>
        <img
          src={currentProduct[8]}
          alt={currentProduct[0]}
          className={style.img}
        />
      </div>
    </div>
  );
};
