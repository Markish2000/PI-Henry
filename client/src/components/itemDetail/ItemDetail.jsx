import React from 'react';
import prueba from './prueba.jpg';
import style from './style/ItemDetail.module.css';

const ItemDetail = (prop) => {
  return (
    <div>
      <div className={style.itemDetail__div}>
        <div className={style.itemDetail__div_div}>
          <div className={style.itemDetail__div_img}>
            <img
              className={style.itemDetail__div_img_border}
              src={prueba}
              alt='prop.name'
              width='100%'
              height='100%'
            />
          </div>
          <div className={style.itemDetail__div_info}>
            <button className={style.itemDetail__div_info_button}>
              Shooter
            </button>
            <h1>Rainbow Six Siege</h1>
            <button className={style.itemDetail__div_info_button}>
              PlayStation 5
            </button>
            <button className={style.itemDetail__div_info_button}>
              X Box S
            </button>
            <button className={style.itemDetail__div_info_button}>xbox</button>
          </div>
          <div className={style.itemDetail__div_description}>
            <p className={style.itemDetail__div_description_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              ipsum, aperiam obcaecati ducimus libero saepe nemo sunt tempore
              veniam reprehenderit reiciendis. Ut illum, tempore dicta debitis
              consectetur libero? Quos, earum.
            </p>
          </div>
        </div>
        <div className={style.itemDetail__div_description_imgExtra}>
          <img src={prueba} alt='props.name' width='180em' />
          <img src={prueba} alt='props.name' width='180em' />
          <img src={prueba} alt='props.name' width='180em' />
        </div>
      </div>
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
