import React, { useEffect } from 'react';
import prueba from './prueba.jpg';
import style from './style/ItemDetail.module.css';
import { getDetail } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemDetailButton from './ItemDetailButton';

const ItemDetail = () => {
  const infoDetail = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getDetail(params.id));
  }, [dispatch]);

  return (
    <div>
      {infoDetail.map((element, index) => (
        <div key={index} className={style.itemDetail__div}>
          <div className={style.itemDetail__div_div}>
            <div className={style.itemDetail__div_img}>
              <img
                className={style.itemDetail__div_img_border}
                src={element.image}
                alt={element.name}
                width='100%'
                height='100%'
              />
            </div>
            <div className={style.itemDetail__div_info}>
              <div className={style.itemDetail__div_info_button_flex}>
                {element.genres.map((elementB, indexB) => (
                  <div key={indexB}>
                    <ItemDetailButton genres={elementB} />
                  </div>
                ))}
                <h3>{element.released}</h3>
              </div>
              <h3>{element.rating} Rating</h3>
              <h1>{element.name}</h1>
              <div className={style.itemDetail__div_info_button_flex}>
                {element.platform.map((elementC, indexC) => (
                  <div className={style.prueba} key={indexC}>
                    <ItemDetailButton genres={elementC} />
                  </div>
                ))}
              </div>
            </div>
            <div className={style.itemDetail__div_description}>
              <h3>Description:</h3>
              <p className={style.itemDetail__div_description_p}>
                {element.description}
              </p>
            </div>
          </div>
          <div className={style.itemDetail__div_description_imgExtra}>
            <img
              src={element.imageExtra}
              alt='props.name'
              width='80%'
              className={style.itemDetail__div_description_imgExtra_img}
            />
            <img
              src={element.image}
              alt='props.name'
              width='80%'
              className={style.itemDetail__div_description_imgExtra_img}
            />
            <img
              src={element.imageExtra}
              alt='props.name'
              width='80%'
              className={style.itemDetail__div_description_imgExtra_img}
            />
          </div>
        </div>
      ))}
      <div className={style.itemDetail__div_games}>
        <div className={style.itemDetail__div_games_div_button}>
          <h3 className={style.itemDetail__div_games_h3}>Our games</h3>
          <div>
            <button className={style.itemDetail__div_games_div_button_border}>
              ◀
            </button>
            <button className={style.itemDetail__div_games_div_button_border}>
              ▶
            </button>
          </div>
        </div>
        <div className={style.itemDetail__div_games_flex}>
          <div className={style.itemDetail__div_games_flex_column}>
            <img src={prueba} alt='prop.name' width='200em' />
            <h5 className={style.itemDetail__div_games_h5}>
              Rainbow Six Siege
            </h5>
            <div className={style.itemDetail__div_games_div_button}>
              <button className={style.itemDetail__div_games_button}>
                PlayStation 5
              </button>
              <button className={style.itemDetail__div_games_button}>
                X Box S
              </button>
              <button className={style.itemDetail__div_games_button}>
                PlayStation 5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemDetail;
