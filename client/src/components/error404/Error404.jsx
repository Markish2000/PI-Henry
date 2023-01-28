import React from 'react';
import style from './style/Error404.module.css';
import errorImg from './assets/error404.png';

const Error404 = () => {
  return (
    <div className={style.error404__div}>
      <div className={style.error404__div_text}>
        <h1 className={style.error404__div_h1}>404</h1>
        <h2 className={style.error404__div_h2}>sorry, the page not found</h2>
        <h3 className={style.error404__div_h3}>
          the link you followed probably broken or the page has been removed
        </h3>
      </div>
      <div>
        <img src={errorImg} alt='error 404' width='800em' />
      </div>
    </div>
  );
};
export default Error404;
