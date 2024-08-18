import "./Avatar.scss";


import React from 'react'

export default function Avatar({ imgSrc }) {
    return (
        <div className="default-avatar">
            {
                avatar ? (
                <img className="avatar" src={imgScr} alt="This is user avatar" />
                ) : (
                <div></div>
                )
            }
        </div>
    )
}













