import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GamesCard from '../games/GamesCard';

const FilterSearchContainer = () => {
  const result = useSelector((state) => state);

  return (
    <div>
      <h2>{`You typed: ${result.searchResult}`}</h2>
      <div>
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
    </div>
  );
};
export default FilterSearchContainer;
