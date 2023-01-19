import style from './style/GamesCard.module.css';
import imgRating from './assets/rating.png';

const GamesCard = ({ id, name, image, genres, rating }) => {
  return (
    <div key={id} className={style.gamesCard__div}>
      <div className={style.gamesCard__div_h3_img}>
        <h3 className={style.gamesCard__div_h3_img_h3}>{rating}</h3>
        <img src={imgRating} alt='Rating' width='20em' height='20em' />
      </div>
      <div className={style.gamesCard__div_flexCenter}>
        <img
          className={style.gamesCard__img}
          src={image}
          alt={name}
          width='90%'
          height='150em'
        />
        <h2>{name}</h2>
        <hr className={style.gamesCard__hr} />
        <div>
          <h3>{genres}</h3>
        </div>
      </div>
    </div>
  );
};
export default GamesCard;
