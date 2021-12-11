import React from 'react';
import "./Hero.css";

export default function Hero({imageSrc}) {
    return (
        <div className="hero">
            <img src={imageSrc} alt="Travel" className="hero__image"/>
            <h1 className="hero__title"> Travel Made Simple</h1>
        </div>
    )
}
