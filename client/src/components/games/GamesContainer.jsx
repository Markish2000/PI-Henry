import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  initialPaginating,
  decrementAccumulator,
  incrementAccumulator,
  paginatingDynamic,
} from '../../redux/actions';
import GamesCard from './GamesCard';
import style from './style/GamesContainer.module.css';
import wodOfWars from './assets/wodofwars.mp4';
import GamesCardFilterContainer from './filter/GamesCardFilterContainer';

const GamesContainer = () => {
  const cardArray = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initialPaginating());
  }, [dispatch]);

  const decrementClickHandler = () => {
    if (cardArray.paginatingAccumulator > 0) {
      dispatch(decrementAccumulator());
      dispatch(paginatingDynamic());
    }
  };

  const incrementClickHandler = () => {
    if (cardArray.paginatingAccumulator < 6) {
      dispatch(incrementAccumulator());
      dispatch(paginatingDynamic());
    }
  };

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
        <button
          onClick={() => decrementClickHandler()}
          className={
            cardArray.paginatingAccumulator === 0
              ? style.gamesContainer__div_button_pd_stop
              : style.gamesContainer__div_button_pd
          }
        >
          -
        </button>
        <p className={style.gamesContainer_paginating_p}>
          {cardArray.paginatingAccumulator}
        </p>
        <button
          onClick={() => incrementClickHandler()}
          className={
            cardArray.paginatingAccumulator === 6
              ? style.gamesContainer__div_button_pd_stop
              : style.gamesContainer__div_button_pd
          }
        >
          +
        </button>
      </div>
      <div className={style.gamesContainer__div_flex}>
        {cardArray.paginating.map((game, index) => (
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
