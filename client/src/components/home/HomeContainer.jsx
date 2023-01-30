import HomeBestGamesContainer from './bestgames/HomeBestGamesContainer';
import HomeCards from './HomeCards';
import HomeVideo from './HomeVideo';
import style from './style/HomeContainer.module.css';

const HomeContainer = () => {
  return (
    <div>
      <HomeVideo />
      <div className={style.homeContainer__div}>
        <div className={style.homeContainer_div_cards}>
          <HomeCards />
        </div>
        <div className={style.homeContainer_div_bestGames}>
          <HomeBestGamesContainer />
        </div>
      </div>
    </div>
  );
};
export default HomeContainer;
