import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import "./VideoPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import CommentSection from "../../components/CommentSection/CommentSection";
import api from '../../usecase';

export default function VideoPage() {
    const { id: videoIdParam } = useParams();
    const [sideVideos, setSideVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get("/videos")
            .then(response => {
                if (response.status === 200) {
                    setSideVideos(response.data);
                } else {
                    setError("Failed to load videos");
                }
            })
            .catch(error => {
                console.error(error);
                setError("Failed to load videos");
            });
    }, []);

    useEffect(() => {
        if (!sideVideos.length) return;

        const videoId = videoIdParam || sideVideos[0]?.id;

        if (!videoId) {
            setError("No video ID available");
            return;
        }

        setError(null);
        setCurrentVideo(null);

        api.get(`/videos/${videoId}`)
            .then(response => {
                if (response.status === 200) {
                    setCurrentVideo(response.data);
                } else {
                    setError("This video isn't available");
                }
            })
            .catch(error => {
                console.error(error);
                setError("This video isn't available");
            });

        window.scrollTo({ behavior: "smooth", top: 0 });
    }, [videoIdParam, sideVideos]);

    document.title = `BrainFlix: ${currentVideo?.title ?? error ?? "Loading..."}`;

    const handleCommented = () => {
        const videoId = videoIdParam || sideVideos[0]?.id;
        api.get(`/videos/${videoId}`)
            .then(response => setCurrentVideo(response.data));
    };

    const handleLike = () => {
        const videoId = videoIdParam || sideVideos[0]?.id;
        api.put(`/videos/${videoId}/likes`)
            .then(response => setCurrentVideo(response.data));
    };

    return (
        <main className="video-page">
            {
                error || !sideVideos.length ? (
                    <div className="video-page__status-message">
                        {error || "Loading..."}
                    </div>
                ) : (
                    <>
                        {currentVideo && (
                            <VideoPlayer
                                posterSrc={currentVideo.image}
                                videoSrc={currentVideo.video}
                            />
                        )}

                        <section className="bottom-section">
                            <div className="bottom-section__content">
                                <div className="bottom-section__video-details-container">
                                    {currentVideo && (
                                        <>
                                            <VideoInfo
                                                title={currentVideo.title}
                                                channel={currentVideo.channel}
                                                description={currentVideo.description}
                                                views={currentVideo.views}
                                                likes={currentVideo.likes}
                                                timestamp={currentVideo.timestamp}
                                                onLike={handleLike}
                                            />
                                            <CommentSection
                                                comments={currentVideo.comments}
                                                videoId={videoIdParam}
                                                onCommented={handleCommented}
                                            />
                                        </>
                                    )}
                                </div>

                                <div className="bottom-section__video-list-container">
                                    <VideoList
                                        videos={sideVideos} 
                                        currentId={videoIdParam} 
                                    />
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </main>
    );
}
