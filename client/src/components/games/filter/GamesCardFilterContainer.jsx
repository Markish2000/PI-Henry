import React, { useEffect, useState } from 'react';
import style from './style/GameCardFilterContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllGenres,
  getAllPlatforms,
  ascendingRating,
  descendingRating,
  ascendingAlphabet,
  descendingAlphabet,
  filterByGenre,
  filterByPlatforms,
} from '../../../redux/actions';

const GamesCardFilterContainer = () => {
  const filterCard = useSelector((state) => state);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    genres: 'All',
    platforms: 'All',
    alphabet: 'None',
    rating: 'None',
  });

  useEffect(() => {
    dispatch(getAllPlatforms());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllGenres());
  }, [dispatch]);

  const selectGenresChangeHandler = (event) => {
    const genreValue = event.target.value;
    setFilter({ ...filter, genres: genreValue });
  };

  const selectPlatformChangeHandler = (event) => {
    const platformValue = event.target.value;
    setFilter({ ...filter, platforms: platformValue });
  };

  const selectAlphabetChangeHandler = (event) => {
    const alphabetValue = event.target.value;
    setFilter({ ...filter, alphabet: alphabetValue });
  };

  const selectRatingChangeHandler = (event) => {
    const ratingValue = event.target.value;
    setFilter({ ...filter, rating: ratingValue });
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    if (filter.genres !== 'All') {
      dispatch(filterByGenre(filter.genres));
    }
    if (filter.platforms !== 'All') {
      dispatch(filterByPlatforms(filter.platforms));
    }
    if (filter.alphabet === 'A ~ Z') {
      dispatch(descendingAlphabet());
    }
    if (filter.alphabet === 'Z ~ A') {
      dispatch(ascendingAlphabet());
    }
    if (filter.rating === 'Ascending') {
      dispatch(ascendingRating());
    }
    if (filter.rating === 'Descending') {
      dispatch(descendingRating());
    }
  };

  return (
    <form
      className={style.gameCardFilterContainer_div}
      onSubmit={submitChangeHandler}
    >
      <div className={style.gameCardFilter_div}>
        <h5>Genres</h5>
        <select
          onChange={(event) => selectGenresChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='All'>All</option>
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
          onChange={(event) => selectPlatformChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='All'>All</option>
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
        <select
          onChange={(event) => selectAlphabetChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='None'>None</option>
          <option value='A ~ Z'>A ~ Z</option>
          <option value='Z ~ A'>Z ~ A</option>
        </select>
      </div>
      <div className={style.gameCardFilter_div}>
        <h5>Rating</h5>
        <select
          onChange={(event) => selectRatingChangeHandler(event)}
          className={style.gameCardFilterGenre__select}
        >
          <option value='None'>None</option>
          <option value='Ascending'>Ascending</option>
          <option value='Descending'>Descending</option>
        </select>
      </div>
      <div>
        <button type='submit'>Filter</button>
      </div>
    </form>
  );
};
export default GamesCardFilterContainer;
