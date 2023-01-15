import HomeBestGamesCard from './HomeBestGamesCard';
import style from './style/HomeBestGamesContainer.module.css';

const HomeBestGamesContainer = () => {
  return (
    <div className={style.homeBestGamesContainer__div}>
      <h3 className={style.homeBestGamesContainer__div__h3}>Best games</h3>
      <HomeBestGamesCard />
    </div>
  );
};
export default HomeBestGamesContainer;
