import logo from "./images/logo.png";
import style from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={style.header}>
{/* ----------------------------------Logo---------------------------------------- */}
      <div className={style.logo}>
        <img src={logo} className={style.logo_img} alt="logo" />
        <div className="logo_text">
          <p className={style.logo_el_text}>
            <span className={style.text}>Natural</span> <span className={style.text}>Cosmetics</span>
          </p>
        </div>
      </div>
{/* -------------------------------Navigate buttons------------------------------- */}
      <div className={style.navbar}>
        <ul className={style.nav_elements}>
          <li>
            <Link to="/women" className={style.element}>
              Жени
            </Link>
          </li>
          <li>
            <Link to="/men" className={style.element}>
              Мъже
            </Link>
          </li>
          <li>
            <Link to="/contact" className={style.element}>
              Контакти
            </Link>
          </li>
          
{/* -------------------------------User buttons------------------------------------- */}
          <div className={style.users_element}>
            <li className={style.user_el}>
              <Link to="/login" className={style.element_user}>
              <i class="fas fa-sign-in-alt"/> Вход
              </Link>
            </li>
            {/* If user is login  */}
            <li className={style.user_el}>
              <Link to="/logout" className={style.element_user}>
              <i class="fas fa-sign-out-alt" style={{margin:'0 2px'}}/>
                Изход
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </header>
  );
};
