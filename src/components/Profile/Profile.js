import { useContext } from "react";
import { useEffect, useState } from "react";
import { UserAuthenticate } from "../../context/context";
import style from "./Profile.module.css";
import * as catalog from "../../services/catalogService";

export const Profile = () => {
  const { authenticate } = useContext(UserAuthenticate);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    catalog.products().then((result) => {
      setProducts(result);
    });
  }, []);

  const el = products.filter((ownProduct) =>
    ownProduct._ownerId === authenticate._id ? { ...ownProduct } : "Not found"
  );

  console.log(el);
  return (
    <>
      <div className={style.wrapper}>
        <h1 className={style.name}>
          {authenticate.firstName} {authenticate.lastName}
        </h1>
        <ul className={style.text}>
          {el.map((x) => (
            <li key={el.id} className={style.li}>
              <div>{[x.title]}</div>
              <div>{[x.price]}</div>
              <div>
                <button>Редактиране</button>
                <button>Изтриване</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
