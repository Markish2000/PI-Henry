import style from './style/HomeBestGamesCard.module.css';

const HomeBestGamesCard = ({ image, name, genres }) => {
  return (
    <div className={style.homeBestGamesCard__div}>
      <div className={style.homeBestGamesCard__div_img}>
        <img
          loading='lazy'
          src={image}
          alt={name}
          className={style.homeBestGamesCard__div__img}
          width='90em'
          height='80em'
        />
        <div className={style.homeBestGamesCard__div__h6__p}>
          <h6 className={style.homeBestGamesCard__div__h6}>{name}</h6>
          <p className={style.homeBestGamesCard__div__p}>{genres}</p>
        </div>
      </div>
    </div>
  );
};
export default HomeBestGamesCard;
