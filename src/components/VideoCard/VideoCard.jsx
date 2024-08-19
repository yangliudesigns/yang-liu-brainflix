import React from 'react'
import "./VideoCard.scss";


export default function VideoCard({ 
    id, 
    title, 
    channel, 
    image, 
    changeVideo 
}) {

  return (

        <div className="video-card" key={id}>

            <a 
            className="video-card__item"
            onClick={() => {
            changeVideo(id)
            }} href='#root'>

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
            </a>

        </div>

  )
}
