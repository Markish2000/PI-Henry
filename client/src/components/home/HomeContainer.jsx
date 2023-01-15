import HeaderContainer from '../header/HeaderContainer';
import HomeBestGamesContainer from './bestgames/HomeBestGamesContainer';
import HomeVideo from './HomeVideo';

const HomeContainer = () => {
  return (
    <div>
      <HeaderContainer />
      <HomeVideo />
      <HomeBestGamesContainer />
    </div>
  );
};
export default HomeContainer;
