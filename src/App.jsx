import Header from './components/Header/Header';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import VideoInfo from './components/VideoInfo/VideoInfo';
import infodata from './data/video-details.json';
import React, { useState } from 'react';
import VideoList from './components/VideoList/VideoList';
import CommentForm from './components/CommentForm/CommentForm';
import CommentList from './components/CommentList/CommentList';
import './App.scss';

export default function App() {
  const [currentVideo, setCurrentVideo] = useState(infodata[0]);

  const handleVideoSelect = (videoId) => {
    const selectedVideo = infodata.find((video) => video.id === videoId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <div className="app">
      <Header />
          <VideoPlayer
            vidSrc={currentVideo.video}
            posSrc={currentVideo.image}
          />

      <main className="content">
        <section className="main-content">
          <VideoInfo video={currentVideo} />

          <CommentForm />
          <CommentList comments={currentVideo.comments} />
        </section>

        <section className="side-content">
          <VideoList
            vids={infodata}
            currentVideo={currentVideo}
            changeVideo={handleVideoSelect}
          />
        </section>
      </main>
    </div>
  );
}
