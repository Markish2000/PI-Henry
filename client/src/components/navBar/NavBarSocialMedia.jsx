import gitHub from './assets/github.png';
import portfolio from './assets/portfolio.png';
import linkedin from './assets/linkedin.png';
import gmail from './assets/gmail.png';
import instagram from './assets/instagram.png';
import whatsApp from './assets/whatsapp.png';
import style from './style/NavBarSocialMedia.module.css';

const NavBarSocialMedia = () => {
  return (
    <div className={style.navBarSocialMedia__div}>
      <a href='https://github.com/Markish2000' rel='noreferrer' target='_blank'>
        <img
          loading='lazy'
          src={gitHub}
          alt='gitHub'
          width='25rem'
          height='25rem'
        />
      </a>
      <a
        href='https://markish2000.github.io/Portfolio/'
        rel='noreferrer'
        target='_blank'
      >
        <img
          loading='lazy'
          src={portfolio}
          alt='portfolio'
          width='25rem'
          height='25rem'
        />
      </a>
      <a
        href='https://www.linkedin.com/in/marcoshernanparella/'
        rel='noreferrer'
        target='_blank'
      >
        <img
          loading='lazy'
          src={linkedin}
          alt='linkedin'
          width='25rem'
          height='25rem'
        />
      </a>
      <a
        href='mailto:marcosparella2000@gmail.com'
        rel='noreferrer'
        target='_blank'
      >
        <img
          loading='lazy'
          src={gmail}
          alt='gmail'
          width='25rem'
          height='25rem'
        />
      </a>
      <a
        href='https://www.instagram.com/marcos_parella/'
        rel='noreferrer'
        target='_blank'
      >
        <img
          loading='lazy'
          src={instagram}
          alt='instagram'
          width='25rem'
          height='25rem'
        />
      </a>
      <a
        href='https://api.whatsapp.com/send?phone=5491151649895&text=¡Hola! Me encantó tu app con React Js ¿Será que quieres trabajar con nosotros?'
        rel='noreferrer'
        target='_blank'
      >
        <img
          loading='lazy'
          src={whatsApp}
          alt='whatsApp'
          width='25rem'
          height='25rem'
        />
      </a>
    </div>
  );
};
export default NavBarSocialMedia;
