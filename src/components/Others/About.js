import about from "./img/about.jpg";
import style from "./About.module.css";

export const About = () => {
  return (
    <div className={style.allElements}>
      <h1 className={style.title}>Нашите ценности</h1>

      <div className={style.imgWrapper}>
        <img src={about} className={style.img} alt="logo" />
      </div>

      <div className={style.text}>
        <ul className={style.elWrapper}>
          <li className={style.el}>
            <i className="fas fa-hand-holding-heart"></i> Грижа
            <p>
              Ние се грижим за клиентите си като им предлагаме индивидуален
              здравен съвет и ефективно обслужване.
            </p>
          </li>

          <li className={style.el}>
            <i className="fas fa-hand-holding-heart"></i> Доверие
            <p>
              При нас клиентите се чувстват в спокойна, открита и дружелюбна
              среда.
            </p>
          </li>

          <li className={style.el}>
            <i className="fas fa-hand-holding-heart"></i> Богат избор
            <p>
              Предлагаме богат избор от различни брандове с качествени продукти
              на добра стойност, които клиентите обичат.
            </p>
          </li>

          <li className={style.el}>
            <i className="fas fa-hand-holding-heart"></i> Иновативност
            <p>
              Въвеждаме нови и иновативни продукти и услуги с грижа към нашите
              клиенти.
            </p>
          </li>

          <li className={style.el}>
            <i className="fas fa-hand-holding-heart"></i> Отдаденост
            <p>
              Ние печелим доверието, защото работим с вдъхновение, екипност и
              професионализъм, мислим за нуждите на клиента и ги поставяме на
              първо място.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
