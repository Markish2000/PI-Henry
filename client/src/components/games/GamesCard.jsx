import style from './style/GamesCard.module.css';
import imgRating from './assets/rating.png';

const GamesCard = ({ id, name, image, genres, rating, platforms }) => {
  return (
    <div key={id} className={style.gamesCard__div}>
      <div className={style.gamesCard__div_h3_img}>
        <h3 className={style.gamesCard__div_h3_img_h3}>{rating}</h3>
        <img src={imgRating} alt='Rating' width='20em' height='20em' />
      </div>
      <h2>{name}</h2>
      <img src={image} alt={name} width='100%' height='100%' />
      <h3>{genres}</h3>
      <h3>{platforms}</h3>
    </div>
  );
};
export default GamesCard;
