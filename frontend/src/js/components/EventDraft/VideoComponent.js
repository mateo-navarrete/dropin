/* eslint-disable */
import React, { Component } from 'react';
import axios from 'axios';
import 'video.js/dist/video-js.css';
import videojs from 'video.js';

import 'webrtc-adapter';
import RecordRTC from 'recordrtc';

/*
// the following imports are only needed when you're recording
// audio-only using the videojs-wavesurfer plugin
import WaveSurfer from 'wavesurfer.js';
import MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
WaveSurfer.microphone = MicrophonePlugin;

// register videojs-wavesurfer plugin
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
*/

// register videojs-record plugin with this import
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';

class VideoComponent extends Component {
  componentDidMount() {
    // instantiate Video.js
    // this.aspectRatio = 5 / 12;
    this.player = videojs(this.videoNode, this.props, () => {
      // print version information at startup
      console.log(this.videoNode, this.props, window.innerHeight);
      let version_info =
        'Using video.js ' +
        videojs.VERSION +
        ' with videojs-record ' +
        videojs.getPluginVersion('record') +
        ' and recordrtc ' +
        RecordRTC.version;
      videojs.log(version_info);
    });
    window.onresize = this.resizeVideoJS;
    this.resizeVideoJS();

    // videojs('home_video', { height: 'auto', width: 'auto' }).ready(function () {
    //   var myPlayer = this; // Store the video object
    //   var aspectRatio = 5 / 12; // Make up an aspect ratio
    //
    //   function resizeVideoJS() {
    //     // Get the parent element's actual width
    //     var width = document.getElementById(myPlayer.id()).parentElement
    //       .offsetWidth;
    //     // Set width to fill parent element, Set height
    //     myPlayer.width(width).height(width * aspectRatio);
    //   }
    //
    //   resizeVideoJS(); // Initialize the function
    //   window.onresize = resizeVideoJS; // Call the function on resize
    // });

    // device is ready
    this.player.on('deviceReady', () => {
      // this.resizeVideoJS();
      // window.onresize = this.resizeVideoJS;
      // console.log('device is ready!');
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      // console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', () => {
      this.player.record().stopDevice();
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.
      this.timer = setTimeout(() => {
        this.handleUpload();
      }, 0);

      // this.player.record().saveAs({ video: 'my-video-file-name.webm' });
      // console.log(
      //   this.player.recordedData,
      //   this.player.recordedData.length > 0,
      //   this.player.recordedData && this.player.recordedData.length > 0
      // );
      // if (this.player.recordedData && this.player.recordedData.length > 0) {
      //   let streamData = this.player.recordedData[
      //     this.player.recordedData.length - 1
      //   ];
      //   console.log('streamData', streamData);
      // }
    });

    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });
  }

  resizeVideoJS = () => {
    console.log(
      'resize',
      this.player,
      screen.orientation.angle,
      screen.orientation.angle < 90
    );
    const { innerWidth: iW, innerHeight: iH } = window;
    console.log(iW, iH);
    if (iW > iH) {
      this.player.aspectRatio('16:9');
      // this.player.height(iH);
    } else {
      // screen.orientation.angle < 90
      this.player.aspectRatio('9:16');
    }

    // this.player.height =
    //   +screen.orientation.angle < 90 ? innerHeight : innerWidth;
    //
    // player.aspectRatio("9:16");
  };

  // resizeVideoJS = () => {
  //   // Get the parent element's actual width
  //   let width = document.getElementById('myVideo').parentElement.offsetWidth;
  //   // Set width to fill parent element, Set height
  //   console.log(width);
  //   this.player.width(width).height(width * this.aspectRatio);
  // };

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }
  //classes vjs-4-3 vjs-16-9
  // data-setup='{"fluid": true}'
  //data-setup='{ "plugins": { "zoomoomrotate": { "rotate": "270", "zoom": "1.4" } } }'
  handleUpload = async () => {
    let media = {
      srcData: this.videoNode.src,
      blobData: this.player.recordedData,
      // that: this,
      // record: this.player.record(),
    };
    // let blob = await fetch(media.srcData).then(r => r.blob());
    // let url = window.URL.createObjectURL(media.blobData);
    console.log('@media', media);
    this.upload(media);
    // this.upload(this.player.recordedData);
    // console.log('@blob', blob);
  };

  upload = blob => {
    const data = new FormData();
    data.append('file', blob, blob.blobData.name);
    console.log('@data', data, '@blob', blob);

    // export const getData = url => {
    //   return axios.get(url);
    // };
    //
    // export const postData = (url, options) => {
    //   return axios.post(url, options);
    // };

    axios
      .post(`/api/events/upload`, {
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        },
        timeout: 30000,
        data: blob,
      })
      .then(res => console.log(res))
      .then(() => {
        axios.get(`/api/events/upload`).then(res => console.log(res));
      });
    // fetch(serverUrl, {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then(success => console.log('upload recording complete.'))
    //   .catch(error => console.error('an upload error occurred!'));
  };

  render() {
    return (
      <div data-vjs-player>
        <video
          id="myVideo"
          ref={node => (this.videoNode = node)}
          className="video-js vjs-default-skin"
          playsInline
        />
      </div>
    );
  }
}

export default VideoComponent;
