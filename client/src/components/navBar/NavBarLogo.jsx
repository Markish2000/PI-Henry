import logo from './assets/logo.png';
import style from './style/NavBarLogo.module.css';

const NavBarLogo = () => {
  return (
    <div className={style.div_logo}>
      <img src={logo} alt='Violet joystick' height='90em' width='90em' />
      <h2 className={style.h2_logo}>
        <b>Markish</b>
      </h2>
    </div>
  );
};
export default NavBarLogo;
