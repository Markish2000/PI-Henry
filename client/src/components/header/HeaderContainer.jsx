import style from './style/HeaderContainer.module.css';
import notification from './assets/notification.png';
import perfil from './assets/perfil.jpeg';

const HeaderContainer = () => {
  return (
    <div className={style.headerContainer__div}>
      <div className={style.headerContainer__div__input}>
        <input
          type='text'
          placeholder='Search...'
          className={style.headerContainer__input}
        />
      </div>
      <div>
        <h5>Marcos Parella</h5>
        <img src={perfil} alt='prop.name' width='100em' />
        <img src={notification} alt='Notification' width='20em' />
      </div>
    </div>
  );
};
export default HeaderContainer;
