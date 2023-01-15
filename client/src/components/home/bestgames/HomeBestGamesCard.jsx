import harryPotter from './assets/prueba.jpg';
import style from './style/HomeBestGamesCard.module.css';

const HomeBestGamesCard = () => {
  return (
    <div className={style.homeBestGamesCard__div}>
      <img
        src={harryPotter}
        alt=''
        className={style.homeBestGamesCard__div__img}
        width='90em'
        height='80em'
      />
      <div className={style.homeBestGamesCard__div__h6__p}>
        <h6 className={style.homeBestGamesCard__div__h6}>Hogwarts Legacy</h6>
        <p className={style.homeBestGamesCard__div__p}>Warnes Bros.</p>
      </div>
    </div>
  );
};
export default HomeBestGamesCard;
