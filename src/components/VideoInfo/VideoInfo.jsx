import "./VideoInfo.scss";
import React from 'react'
import viewsIcon from "../../assets/images/views.svg";
import likesIcon from "../../assets/images/likes.svg";




export default function VideoInfo({
    title,
    channel,
    description,
    views,
    likes,
    timestamp,
    onLike,
    }) {

    title ??= "Loading...";
    channel ??= "Loading...";
    description ??= "Loading...";
    views ??= 0;
    likes ??= 0;

    return (

    <section className="video-info">
    
        <h1 className="video-info__title heading-page">
            {title}
        </h1>
        
        <div className="video-info__feedback">
            <div className="video-info__info-group">
                <h5 className="video-info__channel heading-subheader">
                    by {channel}
                </h5>
                <p className="video-info__timestamp paragraph-body">
                {new Date(timestamp).toLocaleDateString()}
                </p>
            </div>

            <div className="video-info__info-group">
                <p className="video-info__data paragraph-body">
                    <img 
                    src={viewsIcon} 
                    alt="views" 
                    className="video-info__icon" 
                    />
                    {views}
                </p>
                <p className="video-info__data paragraph-body">
                    <img 
                    src={likesIcon} 
                    alt="likes" 
                    className="video-info__icon" 
                    />
                    {likes}
                </p>          
            </div>
        </div>

        <p className="video-info__description paragraph-body">
            {description}
        </p>

    </section>
    )
}
