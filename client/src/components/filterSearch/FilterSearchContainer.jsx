import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GamesCard from '../games/GamesCard';
import style from './style/FilterSearchContainer.module.css';

const FilterSearchContainer = () => {
  const result = useSelector((state) => state);

  return (
    <div>
      <div className={style.filterSearchContainer__div_bgImage}>
        <div className={style.filterSearchContainer__div_bgImage_flex}>
          <h2>{`You typed: " ${result.filterBySearchValue} "`}</h2>
        </div>
      </div>
      {result.filterBySearch.length ? (
        <div className={style.filterSearchContainer__div_cards}>
          {result.filterBySearch.map((game, index) => (
            <NavLink to={`/games/${game.id}`}>
              <div key={index}>
                <GamesCard
                  id={game.id}
                  key={game.id}
                  name={game.name}
                  image={game.image}
                  genres={game.genres}
                  rating={game.rating}
                />
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <h2>{`there is no " ${result.filterBySearchValue} ", in our database, try searching for another video game.`}</h2>
      )}
    </div>
  );
};
export default FilterSearchContainer;
