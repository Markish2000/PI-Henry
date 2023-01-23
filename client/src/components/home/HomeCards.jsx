import React from 'react';
import style from './style/HomeCards.module.css';
import gtaPng from './assets/gtapng.webp';
const HomeCards = () => {
  return (
    <div className={style.homeCards__div}>
      <div className={style.homeCards__div_gta}>
        <div className={style.homeCards__div_gta_bg}>
          <h3>hola</h3>
        </div>
      </div>
      <img
        src={gtaPng}
        className={style.homeCards__div_gta_img}
        alt='Grand Theft Auto'
      />
      <div className={style.homeCards__div_div}>
        <div className={style.homeCards__div_div_bg}>
          <p className={style.homeCards__div_div_p}>New game</p>
          <h3 className={style.homeCards__div_div_h3}>
            Have you played{' '}
            <b className={style.homeCards__div_div_violet}>Grand Theft Auto</b>
            <b className={style.homeCards__div_div_h3_red}> Online</b>?
          </h3>
        </div>
      </div>
    </div>
  );
};
export default HomeCards;
