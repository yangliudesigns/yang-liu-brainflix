import React from 'react'
import "./CommentSection.scss";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";



export default function CommentSection({ comments, videoId, onCommented }) {
    
    const commentList = [...comments].sort((a, b) => b.timestamp - a.timestamp); //Sort newest -> oldest
    const countText = `${comments.length} Comment${
        comments.length !== 1 ? "s" : ""
    }`;


    const handleComment = (comment) => {
        const commentData = {
        name: "BrainFlix User",
        comment: comment,
        };

        fetch(
            `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}/comments?api_key=3997877e-6e9c-4457-a46b-b1eb77309298`, 
            {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(commentData),
        })
        .then(response => response.json())
        .then(() => {
            onCommented();
        })
        .catch((error) => {
            console.error(error);
            alert("An unexpected error occurred when posting comment. Please try again.");
        });
    };   




    return (
    <section className="comment-section">
        <h3 className="comment-section__header heading-section">{countText}</h3>
        <CommentForm onComment={handleComment} />
        <CommentList comments={commentList} />
    </section>
    )
}
