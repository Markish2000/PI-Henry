import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import HomeBestGamesCard from './HomeBestGamesCard';
import style from './style/HomeBestGamesContainer.module.css';

const HomeBestGamesContainer = () => {
  const games = useSelector((state) => state);
  return (
    <div className={style.homeBestGamesContainer__div}>
      <h3 className={style.homeBestGamesContainer__div__h3}>Best games</h3>
      {games.allGames.splice(0, 10).map((element, index) => (
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
