import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getAllGames } from '../../redux/actions';
import GamesCard from './GamesCard';
import style from './style/GamesContainer.module.css';

const GamesContainer = () => {
  const cardArray = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <div className={style.gamesContainer__div_flex}>
      {cardArray.allGames.map((game, index) => (
        <NavLink to={game.id}>
          <div className={style.gamesContainer__div_map} key={index}>
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
  );
};
export default GamesContainer;
