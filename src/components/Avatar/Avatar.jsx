import "./Avatar.scss";


import React from 'react'

export default function Avatar({ imgSrc }) {
    return (
        <img 
        className="avatar" 
        src={imgSrc} 
        alt="avatar" 
        />
    )
        
    }

