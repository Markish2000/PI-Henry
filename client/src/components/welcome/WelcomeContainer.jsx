import WelcomeForm from './WelcomeForm';
import WelcomeVideo from './WelcomeVideo';
import style from './style/WelcomeContainer.module.css';
import { useDispatch } from 'react-redux';
import { getAllGames } from '../../redux/actions';
import { useEffect } from 'react';

const WelcomeContainer = ({ setLoading }) => {
  const dispatch = useDispatch();
  useEffect(async () => {
    setLoading(true);
    await dispatch(getAllGames());
    setLoading(false);
  }, [dispatch]);

  return (
    <div className={style.welcomeContainer__div}>
      <WelcomeForm />
      <WelcomeVideo />
    </div>
  );
};
export default WelcomeContainer;
