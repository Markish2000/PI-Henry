import React from 'react';
import style from './style/HomeCards.module.css';
import gtaPng from './assets/gtapng.webp';
const HomeCards = () => {
  return (
    <div className={style.homeCards__div}>
      <div className={style.homeCards__div_forza}></div>
      <img
        loading='lazy'
        src={gtaPng}
        className={style.homeCards__div_gta_img}
        alt='Grand Theft Auto'
      />
      <div className={style.homeCards__div_gta}></div>
    </div>
  );
};
export default HomeCards;
