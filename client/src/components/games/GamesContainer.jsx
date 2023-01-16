import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../../redux/actions';
import GamesCard from './GamesCard';

const GamesContainer = () => {
  const cardArray = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    console.log(cardArray.allGames);
  }, []);

  return (
    <div>
      <GamesCard />
      {/* {cardArray.allGames?.map((game, index) => {
        <div key={index}>
          <GamesCard
            id={game.id}
            name={game.name}
            image={game.image}
            genres={game.genres}
            rating={game.rating}
            platforms={game.platforms}
          />
        </div>;
      })} */}
    </div>
  );
};
export default GamesContainer;
