import React from 'react'
import "./CommentList.scss";
import CommentCard from "../CommentCard/CommentCard";


export default function CommentList({ comments }) {
  return (

    <section className="comment-list">

      <ul className="comment-list__list">
        
        {comments.map((comment) => (
          <li 
          className="comment-list__item" 
          key={comment.id}
          >

            <CommentCard
              avatar={comment.avatar}
              name={comment.name}
              timestamp={comment.timestamp}
              comment={comment.comment}
            />

          </li>
        ))}
      </ul>
    </section>

  )
}
