import NavBarLogo from './NavBarLogo';
import NavBarSocialMedia from './NavBarSocialMedia';
import style from './style/NavBarHome.module.css';
import search from './assets/search.png';
import home from './assets/home.png';
import games from './assets/games.png';
import creategames from './assets/creategames.png';
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
        <img src={search} alt='Search' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Search</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={home} alt='Home' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3_prueba}>Home</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={games} alt='Games' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Games</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={creategames} alt='Create Game' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Create Game</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={profile} alt='Profile' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Profile</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={friends} alt='Friends' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Friends</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={messages} alt='Messages' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Messages</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          src={developments}
          alt='Developments'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>Developments</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={matches} alt='Matches' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Matches</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={store} alt='Store' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Store</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={favorite} alt='Favorite' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Favorite</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={suggestions} alt='Suggestions' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Suggestions</h3>
      </div>
      <NavBarSocialMedia />
      <div className={style.navbarhome__div_img_h3}>
        <img src={help} alt='Help' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Help</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img src={conditions} alt='Conditions' height='25rem' width='25rem' />
        <h3 className={style.navbarhome__div__h3}>Conditions</h3>
      </div>
    </div>
  );
};
export default NavBarHome;
