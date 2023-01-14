import videoVayne from './assets/vayne.mp4';

const HomeVideo = () => {
  return (
    <div>
      <video
        src={videoVayne}
        autoPlay
        loop
        muted
        width='100%'
        height='100%'
      ></video>
    </div>
  );
};
export default HomeVideo;
