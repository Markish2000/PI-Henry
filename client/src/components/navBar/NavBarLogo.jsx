import logo from './assets/logo.png';
import style from './style/NavBarLogo.module.css';

const NavBarLogo = () => {
  return (
    <div className={style.navbarlogo__div}>
      <img src={logo} alt='Violet joystick' height='90em' width='90em' />
      <h2 className={style.navbarlogo__h2}>
        <b>markish</b>
      </h2>
    </div>
  );
};
export default NavBarLogo;
