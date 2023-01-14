import style from './style/WelcomeImg.module.css';
import videoHog from './img/video.mp4';

// !! ARREGLAR PROBLEMA DE VIDEO (SE VE MAL)
const WelcomeVideo = () => {
  return (
    <div className={style.div}>
      <video
        src={videoHog}
        autoPlay
        loop
        muted
        width='711px'
        height='auto'
      ></video>
    </div>
  );
};
export default WelcomeVideo;
