import HeaderHome from './NavBarHome';
import style from './style/NavBarContainer.module.css';

const NavBarContainer = () => {
  return (
    <div className={style.navbarcontainer__div}>
      <HeaderHome />
    </div>
  );
};
export default NavBarContainer;
