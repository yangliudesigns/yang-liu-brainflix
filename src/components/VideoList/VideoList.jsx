import React from 'react'
import "./VideoList.scss";
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList({vids, currentVideo, changeVideo}) {
  return (

    <section className='video-list'>

    <h6 className='video-list__header paragraph-labels'>
      NEXT VIDEOS
    </h6>

    <div className='video-list__listing'>

        {vids.filter(video => video.id !== currentVideo.id)
        .map(video => {
            return(
                <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
                changeVideo={changeVideo}
            />
            )
        })
    }  </div>
        </section>
  )
}
