import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import style from './style/NavBarSocialMedia.module.css';

const NavBarSocialMedia = () => {
  return (
    <div className={style.navBarSocialMedia__div}>
      <img
        loading='lazy'
        src={facebook}
        alt='facebook'
        width='25rem'
        height='25rem'
      />
      <img
        loading='lazy'
        src={instagram}
        alt='instagram'
        width='25rem'
        height='25rem'
      />
      <img
        loading='lazy'
        src={linkedin}
        alt='linkedin'
        width='25rem'
        height='25rem'
      />
      <img
        loading='lazy'
        src={gmail}
        alt='gmail'
        width='25rem'
        height='25rem'
      />
    </div>
  );
};
export default NavBarSocialMedia;
