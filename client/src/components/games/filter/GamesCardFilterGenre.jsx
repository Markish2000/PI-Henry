import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenre } from '../../../redux/actions';
import style from './style/GameCardFilterGenre.module.css';

const GamesCardFilterGenre = () => {
  const dispatch = useDispatch();
  // const genreSelect = useSelector((state) => state);

  const selectChangeHandler = (event) => {
    const genreValue = event.target.value;
    dispatch(filterByGenre(genreValue));
  };

  return (
    <div className={style.gameCardFilter_div}>
      <h5>Genres</h5>
      <select
        name='genre'
        id=''
        onChange={(event) => selectChangeHandler(event)}
        className={style.gameCardFilterGenre__select}
      >
        <option value='Action'>Action</option>
        <option value='RPG'>RPG</option>
        <option value='Shooter'>Shooter</option>
        <option value='Adventure'>Adventure</option>
      </select>
    </div>
  );
};

export default GamesCardFilterGenre;
