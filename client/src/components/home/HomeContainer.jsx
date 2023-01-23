import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGames } from '../../redux/actions';
import HomeBestGamesContainer from './bestgames/HomeBestGamesContainer';
import HomeVideo from './HomeVideo';
import style from './style/HomeContainer.module.css';

const HomeContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);
  return (
    <div>
      <HomeVideo />
      <div className={style.homeContainer__div}>
        <HomeBestGamesContainer />
      </div>
    </div>
  );
};
export default HomeContainer;
