import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import GamesCard from '../games/GamesCard';
import { getAllGames } from '../../redux/actions';

const FilterSearchContainer = () => {
  const result = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

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
