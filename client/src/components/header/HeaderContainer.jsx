import style from './style/HeaderContainer.module.css';
import notification from './assets/notification.png';

const HeaderContainer = () => {
  return (
    <div className={style.headerContainer__div}>
      <div className={style.headerContainer__div__input}>
        <input
          type='text'
          placeholder='Search...'
          className={style.headerContainer__input}
        />
        <img src={notification} alt='Notification' width='20em' />
      </div>
      <div>
        <img src='' alt='' />
      </div>
    </div>
  );
};
export default HeaderContainer;
