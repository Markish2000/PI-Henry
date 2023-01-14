import style from './style/NavBarContainer.module.css';
import NavBarHome from './NavBarHome';

const NavBarContainer = () => {
  return (
    <div className={style.navbarcontainer__div}>
      <NavBarHome />
    </div>
  );
};
export default NavBarContainer;
