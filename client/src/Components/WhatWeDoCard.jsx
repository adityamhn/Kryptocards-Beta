import React from 'react'
import "./WhatWeDoCard.scss";
import {BACKEND_URL} from '../constants'

export const WhatWeDoCard = () => {
    const testSVG = BACKEND_URL + '/public/assets/Logos/test_svg.svg'
    return (
        <div className="what-we-do-main-div">
                <img className="image-styling" src={testSVG}/>
        </div>
    )
}
