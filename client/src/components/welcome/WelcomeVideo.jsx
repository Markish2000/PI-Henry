import videoHog from './assets/video.mp4';

const WelcomeVideo = () => {
  return (
    <div>
      <video
        src={videoHog}
        autoPlay
        loop
        muted={true}
        width='1108em'
        height='auto'
      ></video>
    </div>
  );
};
export default WelcomeVideo;
