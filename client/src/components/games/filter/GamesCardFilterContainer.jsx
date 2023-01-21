import React from 'react';
import style from './style/GameCardFilterContainer.module.css';
import GamesCardFilterGenre from './GamesCardFilterGenre';
import GamesCardFilterAlfa from './GamesCardFilterAlfa';
import GamesCardFilterRating from './GamesCardFilterRating';

const GamesCardFilterContainer = () => {
  return (
    <div className={style.gameCardFilterContainer_div}>
      <GamesCardFilterGenre />
      <GamesCardFilterAlfa />
      <GamesCardFilterRating />
    </div>
  );
};
export default GamesCardFilterContainer;
