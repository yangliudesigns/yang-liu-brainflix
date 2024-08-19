import "./VideoInfo.scss";
import React from 'react'




export default function VideoInfo({ 
    title, 
    name, 
    time, 
    likes, 
    views, 
    description}) {


  return (

    <section className="video-info">
    
        <h1 className="video-info__title heading-page">{title}</h1>

        <div className="video-info__info-one">
            <h5 className="video-info__name heading-subheader">
            by {name}
            </h5>
            <p className="video-info__time paragraph-body">
            {timestamp && <TimestampLabel timestamp={timestamp} />}
            </p>
        </div>

        <div className="video-info__info-two">
            <div className="video-info__feedback">
                <img src="" alt="" className="video-info__icon" />
                {views}
            </div>
            <div className="video-info__feedback">
                <img src="" alt="" className="video-info__icon" />
                {likes}
            </div>
            
        </div>

      


    </section>


  )
}
