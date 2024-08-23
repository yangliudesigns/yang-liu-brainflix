import React from 'react';
import './Button.scss';
import { Link } from "react-router-dom";

export default function Button({ text, icon, href, onClick, btnStyle = "primary", disabled = false }) {
    const content = (
        <>
            {icon && (
                <img className="button__icon" src={icon} alt="button icon" />
            )}
            {text}
        </>
    );

    const className = `button ${btnStyle === "primary" ? "button--primary" : "button--secondary"}`;

    return href ? (
        <Link to={href} className={className} onClick={onClick}>
            {content}
        </Link>
    ) : (
        <button
            className={className}
            type="button"
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </button>
    );
}
