import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeBestGamesCard from './HomeBestGamesCard';
import style from './style/HomeBestGamesContainer.module.css';
import { bestGames } from '../../../redux/actions';
import { useEffect } from 'react';

const HomeBestGamesContainer = () => {
  const games = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bestGames());
  }, [dispatch]);

  return (
    <div className={style.homeBestGamesContainer__div}>
      <h3 className={style.homeBestGamesContainer__div__h3}>Best games</h3>
      {games.bestGames.map((element) => (
        <NavLink key={element.id} to={`/games/${element.id}`}>
          <HomeBestGamesCard
            name={element.name}
            image={element.image}
            genres={element.genres}
          />
        </NavLink>
      ))}
    </div>
  );
};
export default HomeBestGamesContainer;
