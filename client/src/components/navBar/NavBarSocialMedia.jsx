import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import style from './style/NavBarSocialMedia.module.css';

const NavBarSocialMedia = () => {
  return (
    <div className={style.navBarSocialMedia__div}>
      <img src={facebook} alt='Facebook' width='25rem' height='25rem' />
      <img src={instagram} alt='Instagram' width='25rem' height='25rem' />
      <img src={linkedin} alt='Linkedin' width='25rem' height='25rem' />
      <img src={gmail} alt='Gmail' width='25rem' height='25rem' />
    </div>
  );
};
export default NavBarSocialMedia;
