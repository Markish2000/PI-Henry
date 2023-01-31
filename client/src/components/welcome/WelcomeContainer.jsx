import WelcomeForm from './WelcomeForm';
import WelcomeVideo from './WelcomeVideo';
import style from './style/WelcomeContainer.module.css';
import { useDispatch } from 'react-redux';
import {
  getAllGames,
  getAllPlatforms,
  getAllGenres,
  changeModal,
} from '../../redux/actions';
import { useEffect } from 'react';

const getData = localStorage.getItem('modals');

const WelcomeContainer = ({ setLoading }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line
  useEffect(async () => {
    setLoading(true);
    dispatch(changeModal(JSON.parse(getData)));
    await dispatch(getAllGames());
    await dispatch(getAllPlatforms());
    await dispatch(getAllGenres());
    setLoading(false);
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div className={style.welcomeContainer__div}>
      <WelcomeForm />
      <WelcomeVideo />
    </div>
  );
};
export default WelcomeContainer;
