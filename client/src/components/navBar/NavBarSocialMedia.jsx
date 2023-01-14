import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';

const NavBarSocialMedia = () => {
  return (
    <div>
      <img src={facebook} alt='Facebook' width='30rem' height='30rem' />
      <img src={instagram} alt='Instagram' width='30rem' height='30rem' />
      <img src={linkedin} alt='Linkedin' width='30rem' height='30rem' />
      <img src={gmail} alt='Gmail' width='30rem' height='30rem' />
    </div>
  );
};
export default NavBarSocialMedia;
