import "./VideoPlayer.scss";
import React from 'react'
 

export default function VideoPlayer({ vidSrc, posSrc }) {

  
  return (
    <section className="video-player">
      
      <video 
      className="video-player__video" 
      src={vidSrc} 
      poster={posSrc} 
      controls 
      >
      </video>
      
    </section>
  )
}
