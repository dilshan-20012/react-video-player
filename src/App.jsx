import { useRef } from 'react';
import videojs from 'video.js';
import VideoJs from './components/Video';

function App() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    muted: false,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates:[0.25,0.5,1,1.5],
    sources: [{
      src: 'https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-master.m3u8?tr=sr-240_360_480_720_1080',
      type: 'application/x-mpegURL'
    }],
    poster: "https://ik.imagekit.io/roadsidecoder/yt/example.mp4/ik-thumbnail.jpg?tr=so-5",
    tracks: [
      {
        kind:"captions",
        src:"/subtitles/english.vtt",
        srclang:"eng",
        label:"English",
        default: true,
      },
      {
        kind:"captions",
        src:"/subtitles/hindi.vtt",
        srclang:"hin",
        label:"Hindi",
        default: false,
      },
      {
        kind:"chapters",
        src:"/subtitles/chapters.vtt",
        srclang:"hin",
        label:"Hindi",
        default: false,
      }
    ]

  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div style={{maxWidth:"800px", width:"800px"}}>  
      <VideoJs 
        options={videoJsOptions} 
        onReady={handlePlayerReady} 
      />
    </div>
  )
}

export default App
