import style from './style/GamesCard.module.css';
import imgRating from './assets/rating.png';

const GamesCard = ({ id, name, image, genres, rating, platforms }) => {
  return (
    <div key={id} className={style.gamesCard__div}>
      <div>
        <h3>{rating}</h3>
        <img src={imgRating} alt='Rating' width='20em' />
      </div>
      <h2>{name}</h2>
      <img src={image} alt={name} width='100em' />
      <h3>{genres}</h3>
      <h3>{platforms}</h3>
    </div>
  );
};
export default GamesCard;
