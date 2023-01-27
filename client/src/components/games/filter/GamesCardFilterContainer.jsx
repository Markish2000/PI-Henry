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
  paginatingDynamic,
  filterPaginationBySearch,
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

  const searchChangeHandler = (event) => {
    const searchValue = event.target.value;
    dispatch(filterPaginationBySearch(searchValue));
  };

  const clearFilterClickHandler = () => {
    dispatch(paginatingDynamic());
  };

  const submitFilterChangeHandler = () => {
    if (filter.genres !== 'All') {
      dispatch(filterByGenre(filter.genres));
    } else {
      dispatch(paginatingDynamic());
    }
    if (filter.platforms !== 'All') {
      dispatch(filterByPlatforms(filter.platforms));
    } else {
      dispatch(paginatingDynamic());
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
    <div className={style.gameCardFilterContainer_div}>
      <div className={style.gameCardFilter_div_all_flex_input}>
        <div className={style.gamesCardFilterContainer_div_input}>
          <input
            className={style.gamesCardFilterContainer_input}
            onChange={(event) => searchChangeHandler(event)}
            type='text'
            placeholder='search...'
          />
        </div>
        <div className={style.gamesCardFilterContainer_div_searchButton}>
          <button
            className={style.gamesCardFilterContainer_searchButton}
            type='submit'
            onClick={submitFilterChangeHandler}
          >
            filter
          </button>
          <button
            className={style.gamesCardFilterContainer_searchButton}
            onClick={clearFilterClickHandler}
            type='submit'
          >
            clear filter
          </button>
        </div>
      </div>
      <div className={style.gameCardFilter_div_all_flex}>
        <div className={style.gameCardFilter_div}>
          <h5>Genres</h5>
          <select
            onChange={(event) => selectGenresChangeHandler(event)}
            className={style.gameCardFilterGenre__select}
          >
            <option value='All'>all</option>
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
          <h5>platforms</h5>
          <select
            onChange={(event) => selectPlatformChangeHandler(event)}
            className={style.gameCardFilterGenre__select}
          >
            <option value='All'>all</option>
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
          <h5>alphabet</h5>
          <select
            onChange={(event) => selectAlphabetChangeHandler(event)}
            className={style.gameCardFilterGenre__select}
          >
            <option value='None'>none</option>
            <option value='A ~ Z'>A ~ Z</option>
            <option value='Z ~ A'>Z ~ A</option>
          </select>
        </div>
        <div className={style.gameCardFilter_div}>
          <h5>rating</h5>
          <select
            onChange={(event) => selectRatingChangeHandler(event)}
            className={style.gameCardFilterGenre__select}
          >
            <option value='None'>none</option>
            <option value='Ascending'>ascending</option>
            <option value='Descending'>descending</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default GamesCardFilterContainer;
