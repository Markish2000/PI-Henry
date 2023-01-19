import style from './style/HeaderContainer.module.css';
import notification from './assets/notification.png';
import perfil from './assets/perfil.jpeg';
import search from './assets/search.png';
import { useSelector } from 'react-redux';

const HeaderContainer = () => {
  const modalInfo = useSelector((state) => state);
  return (
    <div className={style.headerContainer__div}>
      <div className={style.headerContainer__div__input}>
        <img
          src={search}
          alt='Search'
          className={style.headerContainer__img_input}
        />
        <input
          type='search'
          placeholder='Search...'
          className={style.headerContainer__input}
        />
        <img
          src={notification}
          alt='Notification'
          className={style.headerContainer__notification}
        />
      </div>
      <div className={style.headerContainer__div_h5_img}>
        <h5 className={style.headerContainer__div_h5}>
          {modalInfo.infoLoginModal}
        </h5>
        <img
          src={perfil}
          className={style.headerContainer__div_img}
          alt={modalInfo.infoLoginModal}
        />
      </div>
    </div>
  );
};
export default HeaderContainer;
