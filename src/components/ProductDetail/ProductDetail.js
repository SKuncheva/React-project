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
    });
  }, [id]);

  const onClikBuyButton=()=>{}
// console.log(currentProduct);
  return (
    <div className={style.wrapper}>
      <div className={style.text}>
        <h1 className={style.title}>{currentProduct[1]}</h1>
        <p className={style.subTitle}>{currentProduct[2]}</p>
        <p className={style.textEl}>{currentProduct[7]}</p>
{/* -------------------------Buy------------------------------ */}
        <div className={style.buy}>
          <p>{currentProduct[4]} мл.</p>
{/*
 category: currentProduct[3],  
 _ownerId: currentProduct[0],  
 _createdOn:currentProduct[8], 
_id: _createdOn:currentProduct[9]
*/}
          <p className={style.price}>
            {currentProduct[5]} <span>лв.</span>
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
          src={currentProduct[6]}
          alt={currentProduct[1]}
          className={style.img}
        />
      </div>
    </div>
  );
};
