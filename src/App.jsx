import Button from "./components/Button/Button"
import commentIcon from "./assets/images/add_comment.svg"
import Header from "./components/Header/Header"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import VideoInfo from "./components/VideoInfo/VideoInfo"
import infodata from "./data/video-details.json";
import React, { useState } from 'react';




export default function App() {

  const [currentVideo, setCurrentVideo] = useState(infodata[0]);

  const handleVideoSelect = (videoId) => {
    const selectedVideo = infodata.find(video => video.id === videoId);
    setCurrentVideo(selectedVideo);
  };


  return(

    <div>

      <Header />
      <VideoPlayer 
        vidSrc={currentVideo.video} 
        posSrc={currentVideo.image}/>
      <VideoInfo video={currentVideo} />



  </div>
  ) 

}

