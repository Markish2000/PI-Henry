import React from 'react';
import style from './style/GameCardFilterGenre.module.css';

const GamesCardFilterRating = () => {
  return (
    <div className={style.gameCardFilter_div}>
      <h5>Rating</h5>
      <select name='Alfa' id='' className={style.gameCardFilterGenre__select}>
        <option value='AlfaAsc'>Ascending</option>
        <option value='AlfaDesc'>Descending</option>
      </select>
    </div>
  );
};
export default GamesCardFilterRating;
