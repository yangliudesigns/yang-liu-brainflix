import React from 'react'
import "./CommentForm.scss";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import commentIcon from "../../assets/images/add_comment.svg";
import imgSrc from "../../assets/images/Mohan-muruge.jpg";




export default function CommentForm({ onComment }) {



    
  return (

    <div className="comment-form">

        <div className="comment-form__avatar-container">
            <Avatar imgSrc={imgSrc} />
        </div>

        <form className="comment-form__form">
            <div className="comment-form__commentbox-container">
                <label className="comment-form__label paragraph-labels">
                    JOIN THE CONVERSATION

                    <textarea
                        className="comment-form__commentbox"
                        id="commentBox"
                        name="comment"
                        placeholder="Add a new comment"
                        />
                </label>
            </div>

            <div className="comment-form__submit-container">

                <Button 
                text="COMMENT" 
                icon={commentIcon} 
                />
            </div>
        </form>
    </div>

    )
}
