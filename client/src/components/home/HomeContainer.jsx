import HeaderContainer from '../header/HeaderContainer';
import HomeBestGamesContainer from './bestgames/HomeBestGamesContainer';
import HomeVideo from './HomeVideo';
import style from './style/HomeContainer.module.css';

const HomeContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <HomeVideo />
      <div className={style.homeContainer__div}>
        <HomeBestGamesContainer />
      </div>
    </div>
  );
};
export default HomeContainer;
