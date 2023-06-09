import protectImg from "./img/protect.jpg";
import style from "./Protection.module.css";

export const Protection = () => {
  return (
    <div className={style.wrapper}>

      <div className={style.img}>
        <img src={protectImg} className={style.protectImg} alt="logo" />
      </div>

      <div className={style.text}>
        <h1 className={style.title}>Защита на личните данни</h1>
        <div>
          <h2>Какви лични данни обработваме?</h2>

          <section>
            <h3>
            <i class="fas fa-check" />Ако пазарувате:</h3>
            <p>
              Данните, които ни предоставяте най-често, са получени чрез
              формуляра за поръчка на стоки или други услуги на уебсайта ни.
              Това са най-вече данни, необходими за сключване на договора за
              покупка.
            </p>
            <ul>
              <li>
                Данни за идентификация, които са име и фамилия, а ако пазарувате
                за фирма – идентификационен и данъчен номер.
              </li>
              <li>
                Данни за контакт, които са имейл адрес, пощенски адрес, адрес за
                фактуриране, телефонен номер, данни за банкова сметка, данни за
                плащане.
              </li>
            </ul>
          </section>

          <section>
            <h3>
            <i class="fas fa-check" />Ако се регистрирате:</h3>
            <p>
              Ако желаете да използвате предимствата на клиентската сметка, е
              необходимо първо да се регистриране на уебсайта ни и следователно
              да сключите договор.
            </p>
            <ul>
              <li>
                Данни за идентификация, които са име и фамилия, а ако пазарувате
                за фирма – идентификационен и данъчен номер.
              </li>
              <li>
                Данни за контакт, които са имейл адрес, пощенски адрес, адрес за
                фактуриране, телефонен номер, данни за банкова сметка, данни за
                плащане.
              </li>
              <li>
                Демографски данни, произтичащи от вашите настройки и поведението
                ви в уебсайта, които представляват данни за пола, датата на
                раждане, предпочитания език.
              </li>
              <li>
                Данни за вход, които представляват вашето потребителско име и
                парола. Към истинската парола нямаме достъп.
              </li>
              <li>
                Данни, произтичащи от действащия договор, по-конкретно закупени
                продукти, обем на предоставените услуги, потребителски сегмент.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};
