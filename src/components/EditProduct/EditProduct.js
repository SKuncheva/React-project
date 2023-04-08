import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import * as details from "../../services/productDetalService";
import * as editProduct from "../../services/editProduct";

export const EditProduct = () => {
  const { id } = useParams();
  const [oldProduct, setOldProduct] = useState('');


  const navigate = useNavigate();

  useEffect(() => {
    details.product(id)
    .then((product) => {
      setOldProduct(product);
    });
  }, []);


  const onSubmitChanges = (e) => {
    e.preventDefault();
    const newInput= Object.fromEntries(new FormData(e.target))
    editProduct.edit(id, newInput)
    .then((result) => {
      setOldProduct(result);
      navigate(`/products/${id}`);
    });
  
  };

  // const newChange = (e) => {
   
  //   console.log(newInput);
  //   setOldProduct(newInput)
  // };

  return (
    <>
      <section>
        <h1>Редактиране на артикул</h1>

        <form onSubmit={onSubmitChanges}>
          <div>
            <input
              //   className={style.inputs}
              type="text"
              name="title"
              defaultValue={oldProduct.title}
           
            />

            <input
              //   className={style.inputs}
              type="text"
              name="brand"
              defaultValue={oldProduct.brand}
            />

            <input
              //   className={style.inputs}
              type="text"
              name="category"
              defaultValue={oldProduct.category}
            />

            <input
              //   className={style.inputs}
              type="text"
              name="ml"
              defaultValue={oldProduct.ml}
            />

            <input
              //   className={style.inputs}
              type="text"
              name="price"
              defaultValue={oldProduct.price}
            />

            <input
              //   className={style.inputs}
              type="text"
              name="imageUrl"
              defaultValue={oldProduct.imageUrl}
            />

            <textarea
              // className={style.textarea}
              name="description"
              defaultValue={oldProduct.description}
            />
          </div>
          <button type="submit">Запамети</button>
        </form>
      </section>
    </>
  );
};
