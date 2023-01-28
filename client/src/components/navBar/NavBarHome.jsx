import NavBarLogo from './NavBarLogo';
import NavBarSocialMedia from './NavBarSocialMedia';
import style from './style/NavBarHome.module.css';
import home from './assets/home.png';
import games from './assets/games.png';
import creategames from './assets/creategames.png';
import profile from './assets/profile.png';
import friends from './assets/friends.png';
import messages from './assets/messages.png';
import developments from './assets/developments.png';
import matches from './assets/matches.png';
import favorite from './assets/favorite.png';
import suggestions from './assets/suggestions.png';
import help from './assets/help.png';
import conditions from './assets/conditions.png';
import logOut from './assets/logout.png';
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../redux/actions';

// !! Falta agregar rutas.
const NavBarHome = () => {
  const modalBoolean = useSelector((state) => state);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(changeModal(!modalBoolean.modal));
  };

  return (
    <div>
      <Link to='/'>
        <NavBarLogo />
      </Link>
      <NavLink to='/'>
        <div className={style.navbarhome__div_img_h3}>
          <img
            loading='lazy'
            src={home}
            alt='Home'
            height='25rem'
            width='25rem'
          />
          <h3 className={style.navbarhome__div__h3_prueba}>home</h3>
        </div>
      </NavLink>
      <NavLink to='/games'>
        <div className={style.navbarhome__div_img_h3}>
          <img
            loading='lazy'
            src={games}
            alt='Games'
            height='25rem'
            width='25rem'
          />
          <h3 className={style.navbarhome__div__h3}>games</h3>
        </div>
      </NavLink>
      <NavLink to='/createGame'>
        <div className={style.navbarhome__div_img_h3}>
          <img
            loading='lazy'
            src={creategames}
            alt='create game'
            height='25rem'
            width='25rem'
          />
          <h3 className={style.navbarhome__div__h3}>create game</h3>
        </div>
      </NavLink>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={profile}
          alt='profile'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>profile</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={friends}
          alt='friends'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>friends</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={messages}
          alt='messages'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>messages</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={developments}
          alt='developments'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>developments</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={matches}
          alt='matches'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>matches</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={favorite}
          alt='favorite'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>favorite</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={suggestions}
          alt='suggestions'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>suggestions</h3>
      </div>
      <NavBarSocialMedia />
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={help}
          alt='help'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>help</h3>
      </div>
      <div className={style.navbarhome__div_img_h3}>
        <img
          loading='lazy'
          src={conditions}
          alt='conditions'
          height='25rem'
          width='25rem'
        />
        <h3 className={style.navbarhome__div__h3}>conditions</h3>
      </div>
      <NavLink to='/'>
        <div
          className={style.navbarhome__div_img_h3}
          onClick={() => openModal()}
        >
          <img
            loading='lazy'
            src={logOut}
            alt='logOut'
            height='25rem'
            width='25rem'
          />
          <h3 className={style.navbarhome__div__h3}>log out</h3>
        </div>
      </NavLink>
    </div>
  );
};
export default NavBarHome;
