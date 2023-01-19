import style from './style/HomeVideo.module.css';

const HomeVideo = () => {
  return (
    <div className={style.homeVideo__div}>
      <div className={style.homeVideo__div_h1}>
        <div className={style.homeVideo__div_h1_h2}>
          <h1>Online soon</h1>
          <h2>
            <b className={style.homeVideo__b_grey}>Build your</b>
            <b className={style.homeVideo__b_violet}>team</b>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default HomeVideo;
