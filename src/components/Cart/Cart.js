import { UserAuthenticate } from "../../context/context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import * as buy from "../../services/buyService";
import style from "./Cart.module.css";

export const Cart = () => {
  const { authenticate } = useContext(UserAuthenticate);
  const [total, setTotal] = useState(Number(0));
  const [myProduct, setMyProduct] = useState([]);

  useEffect(() => {
    buy.getProduct(authenticate._id).then((result) => {
      if (result.length > 0) {
        setMyProduct(result);
      }
    });
  }, [authenticate._id]);

useEffect(()=>{
  setTotal(
    myProduct.map((x) => parseFloat(x.price)).reduce((a, b) => a + b, 0)
  );
},[myProduct])


  const delEl = (id) => {
    buy.delProducts(id)
    .then((res) => {
      setMyProduct(myProduct.filter((x) => x._id !== id && x));
    });
  };


  return (
    <div>
      {myProduct.length === 0 ? (
        <p className={style.p}>Количката е празна</p>
      ) : (
        <>
          <ul className={style.wrapper}>
            {myProduct &&
              myProduct.map((x) => (
                <li key={x._id} className={style.li}>
                  <div className={style.el}>
                    <div className={style.img}>
                      <img
                        className={style.image}
                        src={x.imageUrl}
                        alt={x.title}
                      />
                    </div>
                    <p>{x.title}</p>
                    <p>{x.brand}</p>
                    <p>{x.price}</p>
                    <div>
                      <i
                        className="fas fa-times"
                        style={{ cursor: "pointer" }}
                        onClick={() => delEl(x._id)}
                      />
                    </div>
                  </div>

                  <br />
                </li>
              ))}
          </ul>

          <div className={style.total}>
            <p>Общо: {total} лв.</p>
          </div>
        </>
      )}
    </div>
  );
};
