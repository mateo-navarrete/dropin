// export const videoJsOptions = {
export const videoConfig = {
  controls: true,
  fluid: true,
  aspectRatio: '16:9',
  // responsive: true,
  // width: 1280, //window.innerWidth,
  // height: 720, // window.innerHeight,
  plugins: {
    /*
        // wavesurfer section is only needed when recording audio-only
        wavesurfer: {
            src: 'live',
            waveColor: '#36393b',
            progressColor: 'black',
            debug: true,
            cursorWidth: 1,
            msDisplayMax: 20,
            hideScrollbar: true
        },
        */
    record: {
      audio: true,
      // video: true,
      video: {
        // video constraints: set resolution of camera
        mandatory: {
          minWidth: 1280, //window.innerWidth, //1280,
          minHeight: 720, //window.innerHeight, //720,
        },
      },
      // dimensions of captured video frames
      // frameWidth: 1280, //window.innerWidth, //1280,
      // frameHeight: 720, //window.innerHeight, //720,
      maxLength: 3, //10,
      debug: true,
    },
  },
};
