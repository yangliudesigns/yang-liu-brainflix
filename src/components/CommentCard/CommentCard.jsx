import React from 'react'
import "./CommentCard.scss";


export default function CommentCard({ name, comment, timestamp }) {
  return (

    <article className="comment-card">

        <div className="comment-card__avatar-container">
            <Avatar imgSrc="" />
        </div>

        <div className="comment-card__content-container">
            <h5 className="comment-card__name heading-subheader">
                {name}
            </h5>

            <p className="comment-card__timestamp paragraph-body">
                {new Date(video.timestamp).toLocaleDateString()}
            </p>
        
            <p className="comment-card__text paragraph-body">
                {comment}
            </p>
        </div>

  </article>

  )
}
