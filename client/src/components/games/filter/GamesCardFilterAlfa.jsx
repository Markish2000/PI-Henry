import React from 'react';
import style from './style/GameCardFilterGenre.module.css';

const GamesCardFilterAlfa = () => {
  return (
    <div className={style.gameCardFilter_div}>
      <h5>Alphabet</h5>
      <select name='Alfa' id='' className={style.gameCardFilterGenre__select}>
        <option value='AlfaAsc'>A ~ Z</option>
        <option value='AlfaDesc'>Z ~ A</option>
      </select>
    </div>
  );
};
export default GamesCardFilterAlfa;
