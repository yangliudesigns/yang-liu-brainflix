import React from 'react';
import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({ 
    text, 
    icon, 
    href, 
    onClick, 
    btnStyle = "primary", }) {


    const content = (
        <>
            {icon && (
                <img className="btn__icon" src={icon} alt="button icon" />
            )}
            {text}
        </>
    );

    const className = `btn ${btnStyle === "primary" ? "btn--primary" : "btn--secondary"}`;

    return href ? (
        <Link to={href} className={className} onClick={onClick}>
            {content}
        </Link>
    ) : (
        <button
            className={className}
            type="button"
            onClick={onClick}
        >
            {content}
        </button>
    );
}
