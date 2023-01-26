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
      {games.bestGames.map((element, index) => (
        <NavLink to={`/games/${element.id}`}>
          <div key={index}>
            <HomeBestGamesCard
              name={element.name}
              image={element.image}
              genres={element.genres}
            />
          </div>
        </NavLink>
      ))}
    </div>
  );
};
export default HomeBestGamesContainer;
