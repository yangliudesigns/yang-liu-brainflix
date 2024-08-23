import React, { useEffect, useState } from 'react';
import "./VideoPage.scss";
import axios from 'axios';
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import VideoList from "../../components/VideoList/VideoList";
import CommentSection from "../../components/CommentSection/CommentSection";

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "3997877e-6e9c-4457-a46b-b1eb77309298";

export default function VideoPage() {
    const { id: videoIdParam } = useParams();
    const [sideVideos, setSideVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/videos?api_key=${API_KEY}`)
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

        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
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
        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
            .then(response => setCurrentVideo(response.data));
    };

    const handleLike = () => {
        const videoId = videoIdParam || sideVideos[0]?.id;
        axios.put(`${API_URL}/videos/${videoId}/likes?api_key=${API_KEY}`)
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
