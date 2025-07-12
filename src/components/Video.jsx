import { useEffect, useRef } from "react";
import videojs from 'video.js';
import "video.js/dist/video-js.css"

const VideoJs = ({options, onReady}) => {
    const playerRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
         // Make sure Video.js player is only initialized once
        if(!playerRef.current){
            const videoElement = document.createElement("video-js");

            videoElement.classList.add('vjs-big-play-centered',"video-js");
            videoRef.current.appendChild(videoElement);

            const player = playerRef.current = videojs(videoElement, options, () => {
                videojs.log('player is ready');
                onReady && onReady(player);
            });

        }else{
            const player = playerRef.current;

            player.autoplay(options.autoplay);
            player.src(options.src)
        }


    },[options, videoRef])

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
        const player = playerRef.current;

        return () => {
            if (player && !player.isDisposed()) {
                player.dispose();
                playerRef.current = null;
            }
        };
    }, [playerRef]);
    
    return (
        <div data-vjs-player>
            <div ref={videoRef} />
        </div>
    );
}

export default VideoJs;