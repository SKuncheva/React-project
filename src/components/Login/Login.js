import style from "./Login.module.css";
import {Link} from'react-router-dom';
import userIcon from './image/user.png'


export const Login = () => {
  return (
    <div className={style.wrapper}>
      <form className={style.formLoginWrapper}>

        <div className={style.userIconEl}>
        <img src={userIcon} alt='userIcon' className={style.userIcon}/>
        </div>
        
        <div className={style.elements}>
          <div className={style.emailInput}>
            <div className={style.icon}>
            <i className="fas fa-user" />
            </div>
            <input
              className={style.email}
              type="email"
              name="email"
              placeholder="Въведете имейл адрес"
            />
          </div>

          <div className={style.passwordInput}>
          <div className={style.icon}>
            <i className="fas fa-lock" />
            </div>
            <input 
            className={style.password} 
            type="password" 
            name="password"
            placeholder="Въведете парола" />
          </div>
        </div>

        <div>
            <button className={style.button}>Вход</button>
        </div>
        <div className={style.registerLink}>
            <p className={style.p}>Нямате регистрация?</p>
            <Link to='/register' className={style.linkRegister}>Регистрация</Link>
        </div>
      </form>
    </div>
  );
};
