import React, { useEffect, useState } from 'react';
import style from './style/GameCardFilterContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGenres, getAllPlatforms } from '../../../redux/actions';

const GamesCardFilterContainer = () => {
  const filterCard = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    genres: '',
    platforms: '',
    alphabet: '',
    rating: '',
  });

  useEffect(() => {
    dispatch(getAllPlatforms());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const selectChangeHandler = (event) => {
    const genreValue = event.target.value;
    // dispatch(filterByGenre(genreValue));
  };
  return (
    <form className={style.gameCardFilterContainer_div}>
      <div className={style.gameCardFilter_div}>
        <h5>Genres</h5>
        <select
          onChange={(event) => selectChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='all'>All</option>
          {filterCard.allGenres.map((element) => {
            return (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.gameCardFilter_div}>
        <h5>Platforms</h5>
        <select
          onChange={(event) => selectChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='all'>All</option>
          {filterCard.allPlatforms.map((element) => {
            return (
              <option key={element.id} value={element.name}>
                {element.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={style.gameCardFilter_div}>
        <h5>Alphabet</h5>
        <select name='alpha' className={style.gameCardFilterGenre__select}>
          <option value='none'>None</option>
          <option value='alfaAsc'>A ~ Z</option>
          <option value='alfaDesc'>Z ~ A</option>
        </select>
      </div>
      <div className={style.gameCardFilter_div}>
        <h5>Rating</h5>
        <select name='rating' className={style.gameCardFilterGenre__select}>
          <option value='none'>None</option>
          <option value='alfaAsc'>Ascending</option>
          <option value='alfaDesc'>Descending</option>
        </select>
      </div>
      <div>
        <button type='submit'>Filter</button>
      </div>
    </form>
  );
};
export default GamesCardFilterContainer;
