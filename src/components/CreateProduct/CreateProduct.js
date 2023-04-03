import { useState } from "react";
import style from "./CreateProduct.module.css";

export const CreateProduct = () => {
  const [product, setProduct]=useState({
    title:'',
    brand:'',
    category:'',
    ml:'',
    price:'',
    imageUrl:'',
    description:''
  })
  const onCreateForm=(e)=>{
    e.preventDefault()
    setProduct(state=> [...state])
  }

  return (
    <>
      <section className={style.wrapper}>
        <h1>Добавете нов артикул</h1>

        <form onSubmit={onCreateForm}>
          <div>
            <input type="text" name="title" placeholder="Заглавие"  />

            <input type="text" name="brand" placeholder="Марка" />

            <input type="text" name="category" placeholder="Категория" />

            <input type="text" name="ml" placeholder="Милилитри" />

            <input type="text" name="price" placeholder="Цена" />

            <input type="text" name="imageUrl" placeholder="Снимка" />
            <label>
              Описание:
              <textarea name="description" />
            </label>
          </div>
          <button>Запамети</button>
        </form>
      </section>
    </>
  );
};
