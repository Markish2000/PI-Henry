import React from 'react';
import createGameVideo from './assets/eldenring.mp4';

const CreateGameVideo = () => {
  return (
    <div>
      <video
        src={createGameVideo}
        autoPlay
        loop
        muted={true}
        width='100%'
        height='100%'
      ></video>
    </div>
  );
};
export default CreateGameVideo;
