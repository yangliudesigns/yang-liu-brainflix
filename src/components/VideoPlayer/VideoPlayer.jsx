import React from 'react';
import "./VideoPlayer.scss";


export default function VideoPlayer({ videoSrc, posterSrc }) {
  return (
    <section className="video-player">
      {videoSrc ? (
        <video 
          className="video-player__video" 
          src={videoSrc} 
          poster={posterSrc || ''} 
          controls
        />
      ) : (
        <div>Loading video...</div>
      )}
    </section>
  );
}

