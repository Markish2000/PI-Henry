import React from 'react';
import style from './style/GamesCard.module.css';
import imgRating from './assets/rating.png';
import notFavoriteImg from './assets/notFavorite.png';
import favoriteImg from './assets/favorite.png';

const GamesCard = ({ id, name, image, genres, rating }) => {
  const imageClickHandler = () => {};

  return (
    <div key={id} className={style.gamesCard__div}>
      <div className={style.gamesCard__div_h3_img}>
        <div>
          <img
            onClick={imageClickHandler}
            src={favoriteImg}
            alt='favorite'
            loading='lazy'
            width='35em'
            height='35em'
          />
        </div>
        <div className={style.gamesCard__div_h3_img_flex}>
          <h3 className={style.gamesCard__div_h3_img_h3}>{rating}</h3>
          <img
            loading='lazy'
            src={imgRating}
            alt='rating'
            width='20em'
            height='20em'
          />
        </div>
      </div>
      <div className={style.gamesCard__div_flexCenter}>
        <img
          loading='lazy'
          className={style.gamesCard__img}
          src={image}
          alt={name}
          width='90%'
          height='150em'
        />
        <h2>{name}</h2>
        <hr className={style.gamesCard__hr} />
        <div className={style.gamesCard__h3_genres}>
          {/* <h3>{genres}</h3> */}
        </div>
      </div>
    </div>
  );
};
export default GamesCard;
