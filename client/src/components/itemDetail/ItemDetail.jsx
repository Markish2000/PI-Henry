import React, { useEffect } from 'react';
import style from './style/ItemDetail.module.css';
import {
  getDetail,
  initialPaginatingDetail,
  decrementAccumulatorDetail,
  incrementAccumulatorDetail,
  paginatingDynamicDetail,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import ItemDetailButton from './ItemDetailButton';
import imgRating from '../games/assets/rating.png';

const ItemDetail = () => {
  const infoDetail = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    dispatch(initialPaginatingDetail());
  }, [dispatch]);

  const decrementClickHandler = () => {
    if (infoDetail.paginatingDetailAccumulator > 0) {
      dispatch(decrementAccumulatorDetail());
      dispatch(paginatingDynamicDetail());
    }
  };

  const incrementClickHandler = () => {
    if (infoDetail.paginatingDetailAccumulator < 19) {
      dispatch(incrementAccumulatorDetail());
      dispatch(paginatingDynamicDetail());
    }
  };

  return (
    <div>
      {infoDetail.detail.map((element, index) => (
        <div key={index} className={style.itemDetail__div}>
          <div className={style.itemDetail__div_div}>
            <div className={style.itemDetail__div_img}>
              <div className={style.itemDetail__div_img_h3}>
                <img
                  loading='lazy'
                  className={style.itemDetail__div_img_border}
                  src={element.image}
                  alt={element.name}
                  width='350em'
                  height='250em'
                />
                <h3 className={style.itemDetail__div_img_h3_released}>
                  {element.released}
                </h3>
              </div>
            </div>
            <div className={style.itemDetail__div_info}>
              <div className={style.itemDetail__div__rating}>
                <div className={style.itemDetail__div_info_button_flex}>
                  {element.genres.map((elementB, indexB) => (
                    <div key={indexB}>
                      <ItemDetailButton genres={elementB} />
                    </div>
                  ))}
                </div>
                <h3 className={style.itemDetail__div__rating_h3}>
                  {element.rating}
                </h3>
                <img
                  loading='lazy'
                  src={imgRating}
                  alt='star'
                  height='25em'
                  width='25em'
                />
              </div>
              <h1 className={style.itemDetail_h1}>{element.name}</h1>
              <div className={style.itemDetail__div_info_button_flex}>
                {element.platform.map((elementC, indexC) => (
                  <div className={style.prueba} key={indexC}>
                    <ItemDetailButton genres={elementC} />
                  </div>
                ))}
              </div>
            </div>
            <div className={style.itemDetail__div_description}>
              <h3 className={style.itemDetail__div_description_h3}>
                description:
              </h3>
              <p className={style.itemDetail__div_description_p}>
                {element.description}
              </p>
            </div>
          </div>
          <div className={style.itemDetail__div_description_imgExtra}>
            <img
              loading='lazy'
              src={element.imageExtra}
              alt={element.name}
              width='90%'
              height='170em'
              className={style.itemDetail__div_description_imgExtra_img}
            />
            <img
              loading='lazy'
              src={element.image}
              alt={element.name}
              width='90%'
              height='170em'
              className={style.itemDetail__div_description_imgExtra_img}
            />
            <img
              loading='lazy'
              src={element.imageExtra}
              alt={element.name}
              width='90%'
              height='170em'
              className={style.itemDetail__div_description_imgExtra_img}
            />
          </div>
        </div>
      ))}
      <div className={style.itemDetail__div_games}>
        <div className={style.itemDetail__div_games_div_button}>
          <h3 className={style.itemDetail__div_games_h3}>our games</h3>
          <div>
            <button
              onClick={() => decrementClickHandler()}
              className={style.itemDetail__div_games_div_button_border}
            >
              ◀
            </button>
            <button
              onClick={() => incrementClickHandler()}
              className={style.itemDetail__div_games_div_button_border}
            >
              ▶
            </button>
          </div>
        </div>
        <div className={style.itemDetail__div_games_flex}>
          {infoDetail.paginatingDetail.map((elementK, index) => (
            <NavLink to={`/games/${elementK.id}`}>
              <div
                key={index}
                className={style.itemDetail__div_games_flex_column}
              >
                <img
                  loading='lazy'
                  src={elementK.image}
                  alt={elementK.name}
                  width='200em'
                  height='100em'
                />
                <h5 className={style.itemDetail__div_games_h5}>
                  {elementK.name}
                </h5>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
