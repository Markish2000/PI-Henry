import NavBarLogo from './NavBarLogo';
import NavBarSocialMedia from './NavBarSocialMedia';
import style from './style/NavBarHome.module.css';

const NavBarHome = () => {
  return (
    <div className={style.navbarhome__div__h3}>
      <NavBarLogo />
      <h3>Home</h3>
      <h3>Profile</h3>
      <h3>Friends</h3>
      <h3>Messages</h3>
      <h3>Developments</h3>
      <h3>Matches</h3>
      <h3>Store</h3>
      <h3>Favorite</h3>
      <h3>Suggestions</h3>
      <NavBarSocialMedia />
      <h3>Help</h3>
      <h3>Conditions</h3>
    </div>
  );
};
export default NavBarHome;
