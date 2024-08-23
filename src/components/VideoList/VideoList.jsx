import "./VideoList.scss";
import React from 'react';
import VideoCard from "../VideoCard/VideoCard";

export default function VideoList({ videos, currentId }) {
    const videoList = videos.filter((video) => video.id !== currentId);

    return (
        <aside className="video-list">
            <h5 className="video-list__title heading-section">NEXT VIDEOS</h5>
            <ul className="video-list__listing">
                {videoList.map((video) => (
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
    );
}
