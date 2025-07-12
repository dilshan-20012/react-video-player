import { useRef } from 'react';
import VideoJs from './components/Video';

function App() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://ik.imagekit.io/roadsidecoder/yt/example.mp4',
      type: 'video/mp4'
    }]

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
