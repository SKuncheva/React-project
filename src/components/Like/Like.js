import * as getliked from "../../services/likeService";
import { useContext, useEffect, useState } from "react";
import { UserAuthenticate } from "../../context/context";
export const Like = () => {
  const { authenticate } = useContext(UserAuthenticate);
  const [product, setProduct] = useState([]);
  const currentUser = authenticate._id;

  useEffect(() => {
    getliked.get()
    .then((result) => 
    setProduct(result));
  }, []);
  const el=product.filter((x)=> currentUser === x._ownerId ? x : '')
  return (
    <>
    {el.map(x=>
      <div>
        {/* ----------------------------Image product------------------------------ */}
        <div>
          <img src={x.imageUrl} alt={x.brand} />
        </div>
        {/* ---------------------------Text product-------------------------------- */}
        <div>
          <h2>{x.title}</h2>
          <div>
            <p>{x.brand}</p>
            <p>{x.price} лв.</p>
          </div>
        </div>
      </div>)}
    </>
  );
};
