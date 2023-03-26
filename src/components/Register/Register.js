import style from "./Register.module.css";
import userIcon from "./img/user.png";

export const Register = () => {
  return (
    <div className={style.registerWrapper}>
      <form className={style.wrapper}>
        <div className={style.userIconEl}>
          <img src={userIcon} alt="userIcon" className={style.userIcon} />
        </div>
        {/* -----------------Name-------------------------- */}
        <div className={style.component}>
          <div className={style.elements}>
            <div className={style.icon}>
              <i className="far fa-user" />
              </div>
              <input
                className={style.inputs}
                type="text"
                name="firstName"
                placeholder="Име"
              />
            

            <div className={style.icon}>
              <input
                className={style.inputs}
                type="text"
                name="firstName"
                placeholder="Фамилия"
              />
            </div>
          </div>
          {/* --------------------Email---------------------- */}
          <div className={style.email}>
          <div className={style.icon}>
            <i class="fas fa-envelope" />
            </div>
            <input
              className={style.inputs}
              type="email"
              name="email"
              placeholder="Имейл"
            />
            
          </div>
          {/* -------------------Password-------------------- */}
          <div>
          <div className={style.icon}>
            <i className="fas fa-lock" />
            </div>
            <input
              className={style.inputs}
              type="password"
              name="password"
              placeholder="Парола"
            />
          

          <div className={style.icon}>
            <input
              className={style.inputs}
              type="password"
              name="confirmPassword"
              placeholder="Потвърдете паролата"
            />
          </div>
          </div>
          {/* ----------------Button------------------------- */}
          <div>
            <button className={style.button}>Регистрация</button>
          </div>
        </div>
      </form>
    </div>
  );
};
