import React from 'react';
import "./VideoCard.scss";
import { Link } from "react-router-dom";


export default function VideoCard({ id, title, channel, image }) {
    return (
        <Link to={`/video/${id}`} className="video-card">
            <div className="video-card__item">
                <img 
                    className="video-card__item--image" 
                    src={image} 
                    alt="This is video thumbnail"
                />
                <div className="video-card__item--text-container">
                    <h6 className="video-card__item--title heading-subheader">
                        {title}
                    </h6>
                    <p className="video-card__item--channel paragraph-body">
                        {channel}
                    </p>
                </div>
            </div>
        </Link>
    )
}