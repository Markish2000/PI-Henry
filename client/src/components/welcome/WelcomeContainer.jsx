import WelcomeForm from './WelcomeForm';
import WelcomeVideo from './WelcomeVideo';
import style from './style/WelcomeContainer.module.css';

const WelcomeContainer = () => {
  return (
    <div className={style.welcomeContainer__div}>
      <WelcomeForm />
      <WelcomeVideo />
    </div>
  );
};
export default WelcomeContainer;
