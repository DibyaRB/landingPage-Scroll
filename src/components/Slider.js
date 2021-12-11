import React from 'react'
import './Slider.css';

export default function Slider({imageSrc, title, subtitle, flipped}) {

    const renderContent=()=>{
        if(!flipped){
            return (
                <>
                <img src={imageSrc} alt="Travel" className="slider__image"/>
                <div className="slider__content">
                    <h1 className="slider__title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                </>
            )
        }
        else {
            return(
                <>
                <div className="slider__content">
                    <h1 className="slider__title">{title}</h1>
                    <p>{subtitle}</p>
                </div>
                <img src={imageSrc} alt="Travel" className="slider__image"/>
                </>
            )
        }
    };

    return (
        <div className="slider">
           {renderContent()} 
        </div>
    )
}