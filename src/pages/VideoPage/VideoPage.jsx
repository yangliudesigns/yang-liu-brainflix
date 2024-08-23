import React from 'react'
import "./VideoPage.scss";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import NextVideos from "../../components/NextVideos/NextVideos";
import CommentsSection from "../../components/CommentsSection/CommentsSection";


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
            setSideVideos(response.data);
            })
            .catch(error => {
            console.error(error);
            setError("Failed to load videos");
            });
        }, []);
        
    
    
    useEffect(() => {

    setError(null);
    setCurrentVideo(null);

    if (videoId) {
        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
            .then(response => {
            setCurrentVideo(response.data);
            })
            .catch(error => {
            console.error(error);
            setError("This video isn't available");
            });
        }
    }, [videoIdParam, sideVideos]);


    document.title = `BrainFlix: ${currentVideo?.title ?? error ?? "Loading..."}`;


    const handleCommented = () => {
        const videoId = videoIdParam || sideVideos[0]?.id;
        axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
            .then(response => setCurrentVideo(response.data));
        };


        const handleLike = () => {
            const videoId = videoIdParam || sideVideos[0]?.id;
            // assume there is one like,if no, ignore this
            axios.put(`${API_URL}/videos/${videoId}/likes?api_key=${API_KEY}`)
                .then(response => setCurrentVideo(response.data));
            };
    


  return (

    <main className="video-page">
        {
        error || !sideVideos ? (
            <div className="video-page__status-message">
            {error || "Loading..."}
            </div>
        ) : (
            <>
            <VideoPlayer
                posterSrc={currentVideo?.image}
                videoSrc={currentVideo?.video}
            />

            <section className="bottom-section">
                <div className="bottom-section__content">
                    <div className="bottom-section__video-details-container">
                    
                        <VideoInfo
                        title={currentVideo?.title}
                        channel={currentVideo?.channel}
                        description={currentVideo?.description}
                        views={currentVideo?.views}
                        likes={currentVideo?.likes}
                        timestamp={currentVideo?.timestamp}
                        onLike={handleLike}
                        />
                        {currentVideo !== null && (
                        <CommentsSection
                            comments={currentVideo.comments}
                            videoId={videoId}
                            onCommented={handleCommented}
                        />
                        )}
                    </div>

                    <div className="bottom-section__next-videos-container">
                        <NextVideos 
                        videos={sideVideos} 
                        currentId={videoId} 
                        />
                    </div>
                </div>
            </section>
            </>
            )
        }
    </main>


    )
}
