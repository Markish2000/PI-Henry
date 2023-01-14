import NavBarLogo from './NavBarLogo';
import NavBarSocialMedia from './NavBarSocialMedia';
import style from './style/NavBarHome.module.css';
import home from './assets/home.png';
import profile from './assets/profile.png';
import friends from './assets/friends.png';
import messages from './assets/messages.png';
import developments from './assets/developments.png';
import matches from './assets/matches.png';
import store from './assets/store.png';
import favorite from './assets/favorite.png';
import suggestions from './assets/suggestions.png';
import help from './assets/help.png';
import conditions from './assets/conditions.png';

// !! Falta agregar rutas.
const NavBarHome = () => {
  return (
    <div>
      <NavBarLogo />
      <div className={style.navbarhome__div_img_h3}>
        <img src={home} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3_prueba}>Home</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={profile} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Profile</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={friends} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Friends</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={messages} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Messages</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={developments} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Developments</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={matches} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Matches</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={store} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Store</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={favorite} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Favorite</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={suggestions} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Suggestions</h3>
      </div>
      <NavBarSocialMedia />
      <div className={style.navbarhome__div_img_h3}>
        <img src={help} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Help</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={conditions} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Conditions</h3>
      </div>
    </div>
  );
};
export default NavBarHome;
