import React from 'react'
import "./WhatWeDoCard.scss";
import {BACKEND_URL} from '../constants'

export const WhatWeDoCard = ({image,text}) => {
     
    return (
        <div className="what-we-do-main-div">
            <div className="test-para-wrapper">
            <p className="test-para">
                {text}
                </p>
            </div>
              
                <img className="image-styling" src={image}/>
              
        </div>
    )
}
