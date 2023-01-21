import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllGames } from '../../redux/actions';
import GamesCard from './GamesCard';
import style from './style/GamesContainer.module.css';
import wodOfWars from './assets/wodofwars.mp4';
import GamesCardFilterContainer from './filter/GamesCardFilterContainer';

const GamesContainer = () => {
  const cardArray = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  return (
    <div className={style.gamesContainer__div}>
      <video
        src={wodOfWars}
        width='100%'
        height='100%'
        autoPlay
        loop
        muted
      ></video>
      <div>
        <GamesCardFilterContainer />
      </div>
      <div className={style.gamesContainer__div_button}>
        <button className={style.gamesContainer__div_button_pd}>1</button>
        <button className={style.gamesContainer__div_button_pd}>2</button>
        <button className={style.gamesContainer__div_button_pd}>3</button>
        <button className={style.gamesContainer__div_button_pd}>4</button>
        <button className={style.gamesContainer__div_button_pd}>5</button>
      </div>
      <div className={style.gamesContainer__div_flex}>
        {cardArray.filterBySearch.map((game, index) => (
          <NavLink to={`/games/${game.id}`}>
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
    </div>
  );
};
export default GamesContainer;
