import "./NextVideos.scss";
import React from 'react'
import VideoCard from "../VideoCard/VideoCard";




export default function NextVideos({ videos, currentId }) {

    const nextVideos = videos.filter((video) => video.id !== currentId);

    return (

    <aside className="next-videos">
        <h5 className="next-videos__title heading-section">NEXT VIDEOS</h5>
        <ul className="next-videos__list">
        {nextVideos.map((video) => (
            <li key={video.id}>
            <VideoCard
                id={video.id}
                title={video.title}
                channel={video.channel}
                image={video.image}
            />
            </li>
        ))}
        </ul>
    </aside>
  )
}
