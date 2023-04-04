import style from "./Register.module.css";
import userIcon from "./img/user.png";
import { UserAuthenticate } from "../../context/context";
import { useContext } from "react";
import { useForm } from "../../hooks/formStateHook";

export const Register = () => {
  const { onRegister } = useContext(UserAuthenticate);
  const { values, changeHandler } = useForm(
    {
      email: "",
      gender: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
    },
    onRegister
  );

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    onRegister(values);
  };

  return (
    <div className={style.registerWrapper}>
      <form className={style.wrapper} onSubmit={onRegisterSubmit}>
        <div className={style.userIconEl}>
          <img src={userIcon} alt="userIcon" className={style.userIcon} />
        </div>
        {/* --------------------Email and Gender---------------------- */}
        <div className={style.email}>
          <div className={style.icon}>
            <i className="fas fa-envelope" />
          </div>
          <input
            className={style.inputs}
            type="email"
            name="email"
            placeholder="Имейл"
            value={values.email}
            onChange={changeHandler}
          />

          <div className={style.gender}>
            <div className={style.genderMan}>
              <input
                type="radio"
                name="gender"
                value="Мъж"
                onChange={changeHandler}
              />
              Мъж
            </div>
            <div className={style.genderWoman}>
              <input
                type="radio"
                name="gender"
                value="Жена"
                onChange={changeHandler}
              />
              Жена
            </div>
          </div>
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
              value={values.firstName}
              onChange={changeHandler}
            />

            <div className={style.icon}>
              <input
                className={style.inputs}
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={values.lastName}
                onChange={changeHandler}
              />
            </div>
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
              value={values.password}
              onChange={changeHandler}
            />

            <div className={style.icon}>
              <input
                className={style.inputs}
                type="password"
                name="confirmPassword"
                placeholder="Потвърдете паролата"
                value={values.confirmPassword}
                onChange={changeHandler}
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
